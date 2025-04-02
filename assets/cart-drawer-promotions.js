// Check and update product in cart when the page is loaded or the cart is updated
document.addEventListener('cart_update', checkAndUpdateProduct);
document.addEventListener('DOMContentLoaded', checkAndUpdateProduct);

/**
 * checkAndUpdateProduct()
 * Checks if the cart total price is greater than or equal to free_product and the product is not in the cart
 * Adds the product to the cart if the cart total price is greater than or equal to free_product and the product is not in the cart
 * Removes the product from the cart if the cart total price is less than free_product and the product is in the cart
 */
async function checkAndUpdateProduct() {
  const productId = 52831218630979;

  try {
    const cart = await fetch('/cart.json').then((res) => res.json());
    const total = cart.total_price / 100;
    const product = cart.items.find((item) => item.id === productId);

    const url = total >= 100 && !product ? '/cart/add.js' : total < 100 && product ? '/cart/update.js' : null;
    const body = total >= 100 && !product ? { id: productId, quantity: 1 } : { updates: { [productId]: 0 } };

    if (url) {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      total >= 100 && !product && alert('Produit gratuit ajouté au panier !');
    }

    updateCartDrawer();
  } catch (error) {
    console.error('Error updating cart:', error);
  }
}

/**
 * updateCartDrawer()
 * Gets the cart drawer content after the cart is updated and updates the current cart drawer
 */
async function updateCartDrawer() {
  try {
    const response = await fetch('/?section_id=cart-drawer');
    const html = document.createElement('div');
    html.innerHTML = await response.text();

    document.querySelector('.cart-drawer').innerHTML = html.querySelector('.cart-drawer').innerHTML;
  } catch (error) {
    console.error('Error updating cart drawer:', error);
  }
}

/*
 * Add event listener to all forms with action "/cart/add"
 * Prevent default form submission
 * Use fetch to add the product to the cart
 * Update the cart drawer if the product is added successfully
 */
const addToCartForms = document.querySelectorAll('form[action="/cart/add"]');

addToCartForms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    const formData = new FormData(form);

    fetch('/cart/add.js', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors de l’ajout au panier');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Produit ajouté au panier :', data);
        // Mettre à jour le tiroir du panier ici si nécessaire
        checkAndUpdateProduct();
      })
      .catch((error) => {
        console.error('Erreur :', error);
      });
  });
});
