const promise1=()=>{
    return new Promise((resolve,reject)=>setTimeout(()=>{
        resolve("done first")
    },1000))
}
const promise2=()=>{
    return new Promise((resolve,reject)=>setTimeout(()=>{
        reject("reject second")
    },4000))
}

const promise3=()=>{
    return new Promise((resolve,reject)=>setTimeout(()=>{
        resolve("done third")
    },2000))
}
const promise4=()=>{
    return new Promise((resolve,reject)=>setTimeout(()=>{
        resolve("done last")
    },4000))
}
async function executeNTaskSeries(...promises){
    for(const promise of promises){
        try{
            const res=await promise();
            console.log(res)
        }
        catch(e){
            console.log("error is "+e)
        }
        
    }
}
executeNTaskSeries(promise1,promise2,promise3,promise4);