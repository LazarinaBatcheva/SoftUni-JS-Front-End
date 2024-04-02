function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchFieldElement = document.getElementById('searchField');
      const searchedText = searchFieldElement.value;
      const tBodyTrElements = document.querySelectorAll('tbody tr');

      for (const trElement of tBodyTrElements) {
         const tdElements = trElement.querySelectorAll('td');
         let isSelected = false;

         trElement.classList.remove('select');

         for (const tdElement of tdElements) {
            if (tdElement.textContent.includes(searchedText)) {
               isSelected = true;
               break;
            }
         }

         if (isSelected) {
            trElement.classList = 'select';
         }
      }

      searchFieldElement.value = '';
   }
}