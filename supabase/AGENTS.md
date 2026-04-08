# AGENTS.md — supabase

Dans ce dossier, la sécurité et le cloisonnement des accès priment sur toute autre considération.

## Règles absolues
- Ne jamais exposer de service role, secret serveur ou clé d’administration dans le navigateur.
- Toute opération d’administration Auth doit passer par une brique serveur de confiance.
- Ne pas déclarer un flux sécurisé si le maillon serveur manque.
- Toute policy RLS doit être montrée explicitement dans le diff.
- Toute migration doit rester strictement scoped au besoin demandé.

## Interdits
- Ne pas contourner RLS par facilité.
- Ne pas remplacer une garantie serveur par une simple vérification front.
- Ne pas affirmer qu’un reset de mot de passe ou PIN est complet sans preuve du flux admin côté serveur.
- Ne pas modifier des tables ou policies hors scope.

## Preuves attendues
Toujours fournir :
- migration SQL complète ;
- policies RLS exactes ;
- fonction serveur ou Edge Function concernée ;
- variables d’environnement nécessaires ;
- limites connues ou prérequis de déploiement.
