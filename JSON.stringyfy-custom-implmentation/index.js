const obj = {
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
function customStringyfy(obj){

    if(typeof obj==="number" || typeof obj==="bigint" ){
        return `${obj}`;
    }
    if(typeof obj==="string"){
        return `"${obj}"`
    }
    if(typeof obj==="boolean"){
        return obj;
    }
    if(typeof obj ==="function"|| typeof obj==="symbol" || typeof obj=== "undefined" || obj===undefined || obj===null){
        return '';
    }

    function removeComa(str){
        let newStr=str.split('');
        newStr.pop();//remove last element of array
        return newStr.join("");
    }
    
    if(Array.isArray(obj)){
        let str="";
        
        obj.forEach(val=>{
            str+=customStringyfy(val);
            str+=','
        })
        return '['+removeComa(str)+']';
    }
    if(typeof obj==="object"){
        let keys=Object.keys(obj);
        let str="";
        keys.forEach(key=>{
            
            let val=obj[key];
            if(typeof val==="object"|| Array.isArray(val) || typeof val==="number" || typeof val==="bigint" || typeof val==="boolean" || typeof val==="string"){
                str+= `"${key}":${customStringyfy(val)},`
            }
            
        })
        return '{'+removeComa(str)+'}'
    }
    
}


console.log(customStringyfy(obj));
console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj)===customStringyfy(obj))

