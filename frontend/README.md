# Frontend

Le frontend constitue essentiellement l'interface utilisateur du portail de AFRICA FINTECH FORUM.

# Comment installer ?

Une fois le dépôt principal cloné, allez dans le dossier frontend puis ouvrez l'invite de commande et entrez les commandes suivantes :

```
yarn
yarn dev
yarn tests
```

La commande ```yarn``` permet d'installer toutes les dépendances du projet. <br />
La commande ```yarn dev``` permet de lancer le serveur de développement en local. <br />
La commande ```yarn tests``` permet de lancer les tests d'intégration et les tests fonctionnels.

# Comment générer les fichiers HTML ?

Pour générer les fichiers HTML pour la production, il faut dans un premier temps passer en mode production en modifiant la propriété ```PROD``` à ```true``` dans le ficher de configuration ```next.config.js```

```typescript
env: { PROD: true }
```

Ensuite entrez la commande suivante dans l'invite de commande, pour générer les fichiers HTML ainsi que les assets js et css compilés et minifiés dans un dossier nommé ```out```. :

```
yarn build
```
