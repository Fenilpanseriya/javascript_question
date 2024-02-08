const retryCnt=5;
let delay=2000;

async function func(val){
    console.log("val is "+val)
    if(val>retryCnt/2){
        return false;
    }
    else{
        return true;
    }
}

function impleRetry(func,cnt,d){
    while(cnt>0){
        let res=new Promise((resolve,reject)=>{
            let p=func(cnt)
            console.log("p is"+JSON.stringify(p))
            if(p===true){
                alert("promise resolved")
                resolve(p)
            }
            else{
                cnt--;
                if(cnt>0){
                    console.log("lets try again "+cnt)
                    setTimeout(async()=>{
                        let response= await func(cnt);
                        if(response){
                            alert("promise resolved where cnt = "+cnt)
                            resolve(response)
                        }
                        else{
                            cnt--;
                        }
                    },d)
                }
                else{
                    reject("you are not able to resolve in 5 times")
                }
            }
        }).then(((value)=>{
            alert(`in than ${value}`)
            cnt=0;
            
        })).catch((reason)=>{
            alert(`in catch ${reason}`)
            cnt=0;
        })
    }
}
impleRetry(func,5,2000)