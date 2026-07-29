# RC31 — 8 thèmes premium fidèles aux maquettes

- Reconstruction depuis la RC29 neutre.
- Sélecteur instantané et persistant.
- Ancien bleu sombre supprimé hors thème Dark Navy choisi.
- Fonctions métier inchangées.

# RC29 — Remise à zéro visuelle

- Suppression complète des thèmes et règles CSS de couleur forcée.
- Conservation des fonctionnalités métier de la RC29.

# RC25

- Correction du test GitHub bloqué sur RC22.
- Tests de version rendus compatibles avec les prochaines RC.
- Test du thème clair RC24 intégré à la chaîne automatique.
- Artefacts GitHub renommés RC25.

# RC17

- Build GitHub corrigé : versions et test UI harmonisés.
- Boutons sélectionnés clairement différenciés dans tous les onglets.
- Contrastes RC16 conservés et renforcés.

# Journal des modifications

## 2.0.0 RC14 — Correction générale

- correction de l'erreur `ReferenceError: c is not defined` dans la comparaison des solutions ;
- remplacement des références erronées par les résultats `initial` réellement calculés ;
- nouvelle couche de contraste finale commune à tous les onglets ;
- correction dédiée de la fenêtre de diagnostic, des champs, tableaux, menus flottants, boutons et états désactivés ;
- préservation des couleurs adaptées à l'impression des rapports ;
- ajout d'un test de non-régression RC14.

## 2.0.0 RC14 — Stabilisation

- synchronisation de la version application/package ;
- suppression des tests et documents obsolètes des anciennes RC ;
- correction du pipeline GitHub Actions Windows ;
- contraste final renforcé sur les panneaux sombres et les cartes claires ;
- conservation des fonctions métier, SQLite, imports/exports, rapports et coûts estimatifs.

## 2.0.0 RC22
- Refonte complète et statique des contrastes de tous les écrans.
- Suppression des fonds sombres derrière les textes foncés dans l'espace métier.
- Normalisation des formulaires, tableaux, listes, boutons et états désactivés.
- Zones sombres limitées à la navigation et aux bandeaux premium avec texte blanc imposé.
- Aucun observateur DOM ni recalcul permanent de contraste.

## RC29

- Reconstruction du contraste par héritage sémantique.
- 8 thèmes premium conservés.
- Correctif global des panneaux clairs et sombres.
- Rapports maintenus sur fond blanc.
