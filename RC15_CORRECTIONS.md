# RC15 — Correctif stabilité

- Correction du crash `ReferenceError: c is not defined` dans l’onglet **Contrôle final**.
- Remplacement de toutes les références erronées à `c` par l’objet déclaré `initial`.
- Sécurisation du calcul du pourcentage d’amélioration lorsque le coefficient initial vaut zéro ou est absent.
- Ajout de tests anti-régression ciblés sur le composant `FinalControl`.
- Les données existantes restent conservées : aucune migration destructive.
