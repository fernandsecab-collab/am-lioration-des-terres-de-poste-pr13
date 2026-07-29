# RC14 — Correctifs appliqués

## Erreur bloquante
La fonction `solutionComparison` utilisait la variable inexistante `c`.
Elle utilise désormais l'objet `initial` calculé au début de la fonction :
- `initial.rm` pour la valeur initiale de terre des masses ;
- `initial.c` pour le coefficient initial.

## Contraste global
Une couche CSS finale RC14 couvre tous les écrans : accueil, identification,
terrain/GPS, mesures, diagnostic, implantation, travaux, contrôle final,
rapport, historique, registre, coûts, synchronisation, reporting et administratif.
Elle normalise les textes sur panneaux sombres/clairs, formulaires, boutons,
tableaux, résultats de recherche, badges, fenêtre d'erreur et impression.

## Tests exécutés
- `node src/rc14Stability.test.mjs`
- `node src/productionCore.test.mjs`
- `node src/rc10RuntimeRegression.test.mjs`
- `node src/rc7BusinessRules.test.mjs`
