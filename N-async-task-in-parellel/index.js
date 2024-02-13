const promise1=async()=>{
    return new Promise((resolve,reject)=>setTimeout(()=>{
        resolve("done first")
    },1000)).then((value)=>console.log(value))
}
const promise2=async()=>{
    return new Promise((resolve,reject)=>setTimeout(()=>{
        reject("reject second")
    },4000)).catch((e)=>console.log(e))
}

const promise3=async()=>{
    return new Promise((resolve,reject)=>setTimeout(()=>{
        resolve("done third")
    },2000)).then((e)=>console.log(e))
}
const promise4=async()=>{
    return new Promise((resolve,reject)=>setTimeout(()=>{
        resolve("done last")
    },8000)).then((e)=>console.log(e))
}
function executeNTaskParellel(...promises){
    for(const promise of promises){
        try{
           let res=promise();
            
        }
        catch(e){
            console.log("error is "+e)
        }
        
    }
}
executeNTaskParellel(promise1,promise2,promise3,promise4);