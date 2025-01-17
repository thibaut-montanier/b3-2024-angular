# Comment générer le projet angular

1. Avoir installé les prérequis (node, vscode, angular)
 Depuis le terminal de vscode
```console
ng g new TennisPlayer
```
/!\ Bien penser à ouvrir vs code dans le dossier TennisPlayer nouvellement créé

2. Créer des composants : 
 Depuis le terminal de vscode
```console
ng generate component  components/my-component-name
```
Pour l'utliser 
```html
<app-my-component-name></app-my-component-name>
```

## Pour la prochaine séance : 
- refaire tout l'exercice serait pas mal
- créer un composant "PlayerForm" qui s'occupe de gérer le formulaire. Il émet un évenement (output) lorsque l'utilisateur clique sur le bouton ajouter
