import { PROGRESS_QUEUE_DB, PROGRESS_QUEUE_STORE, PROGRESS_QUEUE_VERSION } from "../config/progressConfig.js";

function openDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(PROGRESS_QUEUE_DB, PROGRESS_QUEUE_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(PROGRESS_QUEUE_STORE)) {
        db.createObjectStore(PROGRESS_QUEUE_STORE, { keyPath: "id", autoIncrement: true });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function enqueueProgressEvent(event) {
  const db = await openDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction(PROGRESS_QUEUE_STORE, "readwrite");
    tx.objectStore(PROGRESS_QUEUE_STORE).add({ ...event, queuedAt: new Date().toISOString() });
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}

export async function readQueuedProgressEvents(limit = 50) {
  const db = await openDb();
  const rows = [];
  await new Promise((resolve, reject) => {
    const tx = db.transaction(PROGRESS_QUEUE_STORE, "readonly");
    const request = tx.objectStore(PROGRESS_QUEUE_STORE).openCursor();
    request.onsuccess = () => {
      const cursor = request.result;
      if (!cursor || rows.length >= limit) return resolve();
      rows.push(cursor.value);
      cursor.continue();
    };
    request.onerror = () => reject(request.error);
  });
  db.close();
  return rows;
}

export async function removeQueuedProgressEvent(id) {
  const db = await openDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction(PROGRESS_QUEUE_STORE, "readwrite");
    tx.objectStore(PROGRESS_QUEUE_STORE).delete(id);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}
