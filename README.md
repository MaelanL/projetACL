# ProjetACL
projet Belote de Jonathan, Pierre et Maelan

# Installation

## XAMPP

Télécharger xampp 8.2.4 : https://www.apachefriends.org/download.html
(tuto : https://www.youtube.com/watch?v=e6xpv83tC50&list=LL&index=2&t=322s)

## Composer

Installer composer : https://getcomposer.org/download/

## Mise en place du projet 

- Une fois le dépôt cloné, executer les commandes suivantes : 
 - composer update 
 - npm update --force

- Renommer le fichier .env.example -> .env

# Lancer le projet

Lancer les serveurs apache et mysql dans xampp 

A la racine du projet executer les commandes suivantes : 
- php artisan serve
- npm run dev



# Commandes

- Créer un model php : php artisan make:model ClassName -m
- Migrations (permet de créer/modifier les tables) : php artisan migrate
- Créer un seeder pour insérer en dur dans la bdd : php artisan make:seeder TableNameSeeder
- Insérer les données d'un seeder en bdd : php artisan db:seed --class=TableNameSeeder
- Créer un controlleur : php artisan make:controller TableNameController





