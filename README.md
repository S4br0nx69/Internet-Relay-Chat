# Internet-Relay-Chat

## Introduction 📖
Le but de ce projet est de créer un chat en ligne basé sur les anciens clients IRC qui signifie Internet Relay Chat Protocol avec la stack MERN.

## Technologies utilisées 👨🏻‍💻

- Front-end : ReactJS + Vite
- Back-end : ExpressJS + Moongoose
- Database : MongoDB + Compass
- Communication : Socket.io

## Setup du projet 🕹️

### Dependances

Assurez-vous d'avoir une version de node égale à 16 et npm égale à 7, vous pouvez la vérifier avec :

```bash
node -v
``` 

```bash
npm -v
``` 

Ensuite, allez dans le dossier **Frontend / src** et exécutez la commande suivante :

```bash
npm install
``` 

Accédez au dossier **Backend / src** et exécutez la même commande

## Comment utiliser le projet 🚀 ##

**- Créer le fichier .env**
À la racine de **Backend > src** crée le fichier .env et ajoutez les lignes suivantes :

```bash
DB_URL=mongodb://localhost:27017/IRC_DATABASE
```

**- Exécuter les serveurs :**
Se rendre dans le dossier adéquate depuis /Front-end :

```bash
 cd src
```

Exécuter le serveur de développement du front-end avec la commande suivante :

```bash
 npm run dev
```

Enfin éxécuter le serveur back-end/src avec la commande suivante :
⚠️ *bien se placer dans le répertoire* ⚠️

```bash
 nodemon index.js
```

# Fonctionnalités 🏗️ #
- Cryptage du mot de passe 🔒
- Authentification JWT 🪙
- Enregistrement de l'utilisateur 📃
- Possibilité de changer son nom d'utilisateur 🔧
- Possibilité de créer des canaux 🔧

## Acteur du projet 💪 ##
- Sabri HAMMI
