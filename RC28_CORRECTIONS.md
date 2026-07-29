# RC28 — reconstruction du contraste par héritage sémantique

## Problème supprimé

Les anciennes feuilles CSS imposaient une couleur sombre à presque tous les éléments texte avec `!important`. Lorsqu'un panneau conservait un fond bleu marine, ses titres et paragraphes devenaient illisibles.

## Correction structurelle

- ajout de `src/rc28-semantic-contrast.css`, chargé après toutes les anciennes feuilles ;
- neutralisation du forçage global des titres, paragraphes, spans et libellés ;
- héritage de la couleur depuis le conteneur ;
- surfaces claires liées à `--theme-text` ;
- surfaces sombres liées à `--theme-on-sidebar` ;
- traitement explicite des panneaux « préparation nationale » et « gouvernance RC » ;
- boutons, badges, alertes, champs et tableaux sécurisés localement ;
- rapports Word/PDF et pages A4 maintenus sur fond blanc, indépendamment du thème ;
- ajout des classes réutilisables `.surface-light` et `.surface-dark` ;
- ajout d'un test de non-régression `rc28SemanticContrast.test.mjs`.

## Fonctionnalités

Aucune fonction métier n'a été supprimée ou remplacée. Les calculs, le diagnostic, le GPS, la cartographie, l'implantation, le DAO, les photos, SQLite, Drive, les coûts, le registre, le reporting et les rapports restent ceux de la RC27.
