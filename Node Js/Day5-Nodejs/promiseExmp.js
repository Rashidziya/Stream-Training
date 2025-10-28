// 1. Creating a Promise
let empData = new Promise((resolve, reject) => {
  let dataAvailable = true; 

  setTimeout(() => {
    if (dataAvailable) {
      resolve(" Success: Data fetched successfully!");
    } else {
      reject(" Error: Failed to fetch data.");
    }
  }, 2000);
});

empData.then((message) => {
  console.log(message);  
})
.catch((error) => {
  console.log(error);    
})
.finally(() => {
  console.log(" Promise completed (settled) ");
});
