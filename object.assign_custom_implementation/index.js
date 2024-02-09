let obj = {
    a: "hello",
    b: [2, 3],
    c: {
      d: 4,
      e: [5, 6],
      f: {
          g: 7,
          h:function(){
            console.log("hello")
          }
        }
    }
};
let obj1={
    a:"hiii"
}
let target={}
function customAssign(target,...objs){
    
    for(let i=0;i<objs.length;i++){
        
        if((i==0) || (typeof(objs[i])==='Array' || typeof(objs[i])==='function' )){
           let keys=Object.keys(objs[i]);
           let temp=objs[i];
           for(let j=0;j<keys.length;j++){
                if (!objs[i].hasOwnProperty(keys[j]) ){
                    continue;
                }
                if(typeof keys[j]!=="object"){
                    target[keys[j]]=temp[keys[j]];
                }
                else{
                    customAssign(target,keys[j]);
                }
                
           }
        }
        else{
            customAssign(target,objs[i])
        }
    }
}
customAssign(target,obj,obj1)
console.log(target)