function customSetTimeout(ms){
    const startTime=new Date().getTime();
    for(let i=0;true;i++){
        if((new Date().getTime()-startTime)>ms){
            break;
        }
    }
}
console.log("timeout start")
console.time();
customSetTimeout(5000);
console.timeEnd();
console.log("timeout end")