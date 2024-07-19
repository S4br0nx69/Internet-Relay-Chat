Introduction 📖
Le but de ce projet est de créer un chat en ligne basé sur les anciens clients IRC (Internet Relay Chat Protocol) en utilisant la stack MERN.

Technologies utilisées 👨🏻‍💻
Front-end : ReactJS + Vite
Back-end : ExpressJS + Mongoose
Base de données : MongoDB + Compass
Communication : Socket.io
Setup du projet 🕹️
Pré-requis
Assurez-vous d'avoir installé les versions suivantes :

Node.js : v16.x
npm : v7.x
Vous pouvez vérifier les versions installées avec les commandes suivantes :

bash
Copier le code
node -v
bash
Copier le code
npm -v
Installation des dépendances
Front-end
Allez dans le dossier Frontend/src :
bash
Copier le code
cd Frontend/src
Installez les dépendances :
bash
Copier le code
npm install
Back-end
Accédez au dossier Backend/src :
bash
Copier le code
cd Backend/src
Installez les dépendances :
bash
Copier le code
npm install
Comment utiliser le projet 🚀
Configuration de l'environnement
Créez un fichier .env dans le dossier Backend/src et ajoutez les lignes suivantes :
bash
Copier le code
DB_URL=mongodb://localhost:27017/IRC_DATABASE
Exécution des serveurs
Front-end
Depuis le dossier Frontend/src, exécutez le serveur de développement :
bash
Copier le code
npm run dev
Back-end
Depuis le dossier Backend/src, exécutez le serveur back-end :
bash
Copier le code
nodemon index.js
Fonctionnalités 🛠️
Cryptage des mots de passe
Authentification JWT
Enregistrement des utilisateurs
Possibilité de changer le nom d'utilisateur
Création de canaux de discussion
Contributeur 💪
Sabri HAMMI
