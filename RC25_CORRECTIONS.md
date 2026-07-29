# RC25 — correction du pipeline GitHub

## Problème corrigé
Les tests historiques RC19 et RC20 exigeaient encore littéralement la chaîne `2.0.0-RC22`. Le passage à RC24 faisait donc échouer `npm run test:all` avant la compilation Windows.

## Corrections
- validation générique d'une version `2.0.0-RCxx` dans les tests historiques ;
- version applicative portée à `2.0.0-RC25` ;
- ajout du test RC24 du thème clair dans `test:ui` ;
- ajout d'un test RC25 du pipeline GitHub ;
- noms des artefacts Windows et Android actualisés en RC25 ;
- conservation de la feuille de thème clair chargée en dernier.
