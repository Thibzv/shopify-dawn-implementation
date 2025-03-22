# Shopify Dawn Implementation - Thibault VIGNERON

## Mise en place du projet

### Installation des dépendances

```bash
npm install -g @shopify/cli@latest  # Installation de Shopify CLI
shopify theme init # Initialisation du projet
cd shopify-dawn-implementation # Se déplacer dans le dossier du projet
```

### Création du shop de développement

Pour créer un shop de développement, il faut se rendre sur le site de Shopify et créer un compte. Une fois le compte créé, il faut créer un shop de développement.

### Lancement du projet

```bash
shopify theme dev --store test-dev-ecommerce-thibz # Lancement du shop de développement
```

## Exercice 1

#### 1. Changement du type de panier en "drawer"

Modification du fichier `config/setting_data.json` :

```json
...
{
"cart_type": "drawer",
}
...
```

#### 2. Création d'un nouveau composant pour les promotions

- Création du snippet `cart-drawer-promotions.liquid` et affichage de ce snippet dans le fichier `sections/cart-drawer.liquid`. 


#### 3. Intégration CSS et developpement des fonctionnalités liées aux promotions

- Utilisation de la variable globale `cart` pour afficher la marge restante avant de bénéficier des différentes promotions. 

- Calcul de la différence entre le montant minimum (via des variables) pour bénéficier de la promotion et le montant actuel du panier, puis affichage de cette différence sous forme de texte. 

- Implémentation d'une barre de progrès sous forme de pourcentage en utilisant la même logique que pour le texte, et en utilisant une variable css et un pseudo-element.


#### 4. Mise a jour dynamique du cart-drawer en fonction du prix du panier

- Modification du fichier `assets/cart-drawer.js` pour créer un événement personnalisé qui se déclenche à chaque fois que le panier est mis à jour.

- Création d'une fonction qui ajoute ou supprime un produit (via un ID prédéfini) au panier en fonction du montant actuel du panier et de la présence ou non du produit. (Utilisation de l'API de Shopify '/cart/add.js' et '/cart/udpate.js')

- Création d'une fonction qui met à jour le DOM du panier en fonction la modification du panier. (Utilisation de l'API de rendering de sections de Shopify '/?section_id=cart-drawer')

- Ajout d'un écouteur d'événement sur le panier pour déclencher la fonction de mise à jour du panier à chaque fois que le panier est mis à jour.