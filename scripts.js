//task 1 
const users = [
    {id : 1 , name :'rami'} ,
    {id : 2 , name :'ahmed '},
    {id : 3 , name :'ramzyy'}
 ] ;


async function printUser(tablr){
    for (const value in table)[
        await Delay(1000);
        console.log(value);
    ]
}

   function Delay(ms){
return new promise (resolve => setTimeout(resolve ,ms));

   }
   printUser(users);

   //Task 2 
   async function awaitCall () {
    try {
        const response = fetch('http//.........')
        const data = await response.JSON();
        console.log(data);

    } catch (Error) [
        console.log('erroe', Error)
    ] 

   }
   // task 3
   async function awaitCall(){
  
try {
const response = await fetch('http:// .....')
if ( response.ok) {
    console.log('Running Succesfully')
} else {
    if (response.status===404) throw new error ("404 ,not found");
    if (response.status===500) throw new error ('500 , server error');
    throw new Error (response.status)
} 

}catch (error) {
    console.log ("fetch", error)
}

   }
   // chainedAsyncFunctions  

   function delay(message) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(message);
        resolve();
      }, 1000);
    });
  }
  
  function getData() {
    return delayAndLog(' getting Data');
  }
  
  function pushData() {
    return delayAndLog('Pushing Data');
  }
  
  function saveData() {
    return delayAndLog('Saving Data');
  }
  
  function chainedAsyncFunctions() {
    getData()
      .then(() => pushData())
      .then(() => saveData())
      .catch((error) => console.error('Error during chained async functions:', error));
  }
  
  // Call the chainedAsyncFunctions function


  chainedAsyncFunctions();
   // task 4 
   async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
  }
  
  async function concurrRequest() {
    try {
      const url1 = 'https://api..../data1';
      const url2 = 'https://api..../data2';
  
      const [res1, res2] = await Promise.all([
        fetchData(url1),
        fetchData(url2)
      ]);
  
      console.log('Combined res:', { res1, res2 });
    } catch (error) {
      console.error('Error during requests:', error);
    }
  }
  
  concurrRequest();

      



     
   


