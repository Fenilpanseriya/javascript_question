

let user={
    name:"fenil",
    email:"fenilpanseriya@gmail.com",
    password:"hello#123",
    address:{
        city:"keshod",
        dist:"Junagadh",
        road:["nh47","nh146"]
    }
}
function omit(object, path) {
    let obj=object;
    let keys=path;
    if(typeof(keys)==="string"){
        keys=keys.split(".");
    }
    if(keys.length===1){
        if(typeof(obj)==="Array"){
            delete obj[+keys];
            return obj;
        }
        delete obj[keys[0]];
        return obj
    }
    
    return  omit(obj[keys[0]], keys.slice(1).join('.'));
   
}
let paths=['password','address.road.0'];
for(let i=0;i<paths.length;i++){
    console.log(omit(user,paths[i]));

}
