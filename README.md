# wordpress_Cv

* Pour installer le repo fait un clone de ce repo
* Ensuite une fois cloner rendez vous dans le dossier et faite un "composer install" suivi d'un "npm i" (assurez vous d'avoir la version 6 de npm)
* A la racine du projet créer un fichier .env et copier y le contenu du fichier .env.exemple
* Pour finir rendez vous sur votre créateur de BDD (php my admin ou myslworkbench) et crée la base de données "cvWordpress"
* Récuperer le dump sql dans le projet nommé "cv.sql" et importer le dans votre nouvelle bdd précédemment créer 

* Pour finir toujours a la racine du projet, pour lancer le serveur php faite : 

## "php -S 127.0.0.1:8000 -d diplay_errors=1 -t ./public"

* Le serveur devrait se lancer et vous aurez accès au CV wordpress précédement créer à l'adresse (127.0.0.1:8000) !

## Enjoy <3
