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
