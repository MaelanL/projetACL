# ProjetACL
projet Belote de Jonathan, Pierre et Maelan

# Installation

## Composer

Installer composer : https://getcomposer.org/download/

## Mise en place du projet

- composer update
- npm install
- npm update

- importer la bdd (nom : acldb)


# Lancer le projet

Nous avons utilisé xampp pour le serveur mysql
- Lancer le serveur mysql dans xampp (port 3306)

A la racine du projet executer les commandes suivantes :
- php artisan serve
- npm run dev



# Organisation

- Les controleurs php se trouvent dans : app/Http/Controllers 
- Les modèles php se trouvent dans : app/Models 
- Les controleurs react se trouvent dans : resources/js/Controllers
- Les modèles react se trouvent dans : resources/js/Models
- Les pages web de l'app se trouvent dans : resources/js/Pages
- Les routes des appels api se trouvent dans : routes/api.php
- Les routes des pages web se trouvent dans : routes/web.php

