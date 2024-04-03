function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const inputElement = document.querySelector('#inputs textarea');
      const inputData = JSON.parse(inputElement.value);
      const outputBestRestaurantElement = document.querySelector('#bestRestaurant p');
      const outputWorkersElement = document.querySelector('#workers p');

      const restaurants = {};

      for (const data of inputData) {
         const [restaurantName, workersInfo] = data.split(' - ');
         const allWorkerts = workersInfo.split(', ');

         if (!restaurants.hasOwnProperty(restaurantName)) {
            restaurants[restaurantName] = [];
         }

         for (const worker of allWorkerts) {
            const [workerName, salaryStr] = worker.split(' ');
            const salary = Number(salaryStr);

            restaurants[restaurantName].push({workerName, salary});
         }
      }

      let bestRestaurantName = '';
      let bestAverageSalary = -Infinity;
      let bestSalary = -Infinity;
      let bestWorkers = [];

      for (const restaurant in restaurants) {
         const workers = restaurants[restaurant];
         const totalSalary = workers.reduce((sum, worker) => sum + worker.salary, 0);
         const averageSalary = totalSalary / workers.length;

         if (averageSalary > bestAverageSalary) {
            bestRestaurantName = restaurant;
            bestAverageSalary = averageSalary;
            bestWorkers = workers;
            bestSalary = Math.max(...workers.map(worker => worker.salary));
         }
      }

      bestWorkers.sort((a, b) => b.salary - a.salary);

      const bestRestaurant = `Name: ${bestRestaurantName} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
      const bestRestaurantWorkers = bestWorkers.map(worker => `Name: ${worker.workerName} With Salary: ${worker.salary}`).join(' ');

      outputBestRestaurantElement.textContent = bestRestaurant;
      outputWorkersElement.textContent = bestRestaurantWorkers;
   }
}