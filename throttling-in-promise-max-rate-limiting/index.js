//implementing throttling of promises which throttle api request to max limit
promiseThrottle.results=[]
function promiseThrottle(promises, count) {
   if(promiseThrottle.results.length>0){
    promiseThrottle.results=[]
   }
   return new Promise((resolve, reject) => {
    let i = 0;
    let running = 0;
    let total = promises.length;
    //let results=[];
    function handleThrottle() {
      if (i === total && running === 0) {
        resolve(promiseThrottle.results);
        return
      }
      while (running < count && i < promises.length) {
        const promise = promises[i];
        const currentIndex = i;
        i++;

        running++;
        Promise.resolve(promise())
          .then((result) => {
            promiseThrottle.results[currentIndex] = { status: 'fulfilled', value: result };
          })
          .catch((error) => {
            promiseThrottle.results[currentIndex] = { status: 'rejected', reason: error };
          })
          .finally(() => {
            running--;
            handleThrottle();
          });
      }
    }
    handleThrottle();
  });
}

let promises = [
  () => setTimeout(() => console.log("1"), 1000),
  () => setTimeout(() => console.log("2"), 2000),
  () => setTimeout(() => console.log("3"), 4000),
  () => setTimeout(() => console.log("4"), 8000),
  () => setTimeout(() => console.log("5"), 16000),
];
let maxLimit = 2;

promiseThrottle(promises,maxLimit)
.then(()=>{
    // while(promiseThrottle.results.length!=promises.length);//optional
    document.querySelector("h1").innerText="throttling of promises which throttle api request to max limit is done"
})
.catch((error)=>{
    alert(error.message)
})
