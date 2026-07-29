# RC22 — Refonte définitive des contrastes

## Principe retenu
- Aucun contrôle dynamique du DOM.
- Aucun calcul de contraste exécuté pendant l'utilisation.
- Espace métier exclusivement clair : fond blanc ou gris très clair, texte bleu nuit.
- Zones sombres limitées à la navigation, aux bandeaux et au visuel principal du rapport : texte blanc obligatoire.

## Corrections
- Neutralisation des anciens fonds bleu nuit présents dans les cartes, tableaux, formulaires et listes.
- Uniformisation des champs, placeholders, options, états désactivés et zones en lecture seule.
- Contraste déterministe des boutons normaux, secondaires, sélectionnés, dangereux et désactivés.
- Correction des tableaux alternés, listes d'affaires, candidats cartographiques et panneaux DAO.
- Consolidation des états conforme, non conforme, alerte et verrouillage.
- Consolidation séparée du rapport premium pour préserver ses bandeaux sombres et ses pages blanches.
- Ajout d'un focus clavier doré clairement visible.
