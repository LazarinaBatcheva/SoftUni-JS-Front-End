function search() {
   const townsListElement = document.getElementById('towns');
   const searchedTextElement = document.getElementById('searchText').value;
   const resultElement = document.getElementById('result');
   let matchesCount = 0;

   Array.from(townsListElement.children)
      .forEach(town => {
         if (town.textContent.toLowerCase().includes(searchedTextElement.toLowerCase())) {
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            matchesCount++;
         }
      });

   resultElement.textContent = `${matchesCount} matches found`;
}
