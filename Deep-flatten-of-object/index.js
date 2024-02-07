const obj = {
    a: "hello",
    b: [2, 3],
    c: {
      d: 4,
      e: [5, 6],
      f: {
          g: 7,
          h:function(){
            console.log("done")
          }
        }
    }
};

const deepFlat=(obj)=>{
    let answer={};
    let keys=Object.keys(obj);
    for(let key in obj){
        
        if (!obj.hasOwnProperty(key)) {
            continue;
        }
        if(typeof(obj[key])==="function"){
            
            answer[key]=obj[key]
            // console.log("in fn " +answer[key]);
        }
        else if(!Array.isArray(obj[key]) && typeof(obj[key])==="object" &&  typeof(obj[key]) !=="funtion" ){
            let subkeys=deepFlat(obj[key]);
            for(const subkey in subkeys){
                answer[key+"."+subkey]=subkeys[subkey]
            }
        }
        else{
            
            answer[key]=obj[key];
        }

    }
    return answer;
}
console.log("flatten object is"+ JSON.stringify(deepFlat(obj)));


