const obj1 = {
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
const obj2 = {
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
const isObject = (object) => {
    return object != null && typeof object === "object";
  };
  const deepEqual = (object1, object2) => {

    const objKeys1 = Object.keys(object1);
    const objKeys2 = Object.keys(object2);
  
    if (objKeys1.length !== objKeys2.length) return false;
  
    for (var key of objKeys1) {
      const value1 = object1[key];
      const value2 = object2[key];
      console.log(value1);
      console.log(value2)
      const isObjects = isObject(value1) && isObject(value2);
  
      if ((isObjects && !deepEqual(value1, value2)) || (!isObjects && value1 !== value2) ) {
        if(typeof(value1)==="function" && typeof value2 ==="function"){
            if(JSON.stringify(value1)===JSON.stringify(value2)){
                
                continue;
            }
        }
        return false;
      }
    }
    return true;
  };
console.log(deepEqual(obj1,obj2));