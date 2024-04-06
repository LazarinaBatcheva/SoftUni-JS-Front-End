function solve() {
   const addButtonsElement = document.querySelectorAll('button.add-product');
   const textAreaElement = document.querySelector('textarea');
   const checkoutButtonElement = document.querySelector('.checkout');
   let selectedProducts = {};
   let totalPrice = 0;
   
   for (const buttonElement of addButtonsElement) {
      const productElement = buttonElement.parentElement.parentElement;

      buttonElement.addEventListener('click', () => {
         const productTitle = productElement.querySelector('.product-title').textContent;
         const productPrice = Number(productElement.querySelector('.product-line-price').textContent);

         selectedProducts[productTitle] = productPrice;
         totalPrice += productPrice;

         textAreaElement.textContent += `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`
      });
   }

   checkoutButtonElement.addEventListener('click', (e) => {
      Array.from(addButtonsElement)
         .forEach(btnElement => btnElement.setAttribute('disabled', 'disabled'));
      e.target.setAttribute('disabled', 'disabled');

      const productList = Object.keys(selectedProducts).join(', ');
   
      textAreaElement.textContent += `You bought ${productList} for ${totalPrice.toFixed(2)}.`
   });
}