const myPromise1 = ()=>new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "King");
  });

  const myPromise3 =()=> new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "Queen");
  });
 
  const myPromise2 =()=> new Promise((resolve, reject) => {
    setTimeout(reject, 2000, "Queen1");
  }).catch((e)=>{
    return e;
  })
  const my4=()=> new Promise((resolve, reject) => {
    setTimeout(resolve, 8000, "Queen2");
  }).catch((e)=>{
    return e;
  })
 

const pipe = (...fns) => x => {
    const pipeFn = (v, f) => {
      console.log(v);
      return Promise.resolve(f(v));
    };
    return fns.reduce(pipeFn, Promise.resolve(x));
};

console.log(pipe(myPromise1,myPromise2,myPromise3,my4)("initial value"));

