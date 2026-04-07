import { getSupabaseClient } from "../supabase/client.js";
import { PROGRESS_SYNC_INTERVAL_MS } from "../config/progressConfig.js";
import { readQueuedProgressEvents, removeQueuedProgressEvent } from "./progressLocalQueue.js";

let timerId = null;

export async function flushProgressQueue() {
  const supabase = getSupabaseClient();
  if (!supabase || !navigator.onLine) return;

  const events = await readQueuedProgressEvents(100);
  for (const item of events) {
    try {
      if (item.type === "upsert_progress") {
        await supabase.from("student_lesson_progress").upsert(item.payload, { onConflict: "student_user_id,lesson_id" });
      }
      await removeQueuedProgressEvent(item.id);
    } catch {
      return;
    }
  }
}

export function startProgressSync() {
  if (timerId) return;
  timerId = window.setInterval(() => {
    flushProgressQueue().catch(() => {});
  }, PROGRESS_SYNC_INTERVAL_MS);

  window.addEventListener("online", () => {
    flushProgressQueue().catch(() => {});
  });
}
