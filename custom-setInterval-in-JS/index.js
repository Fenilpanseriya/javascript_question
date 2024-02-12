function customSetTimeout(ms){
    const startTime=new Date().getTime();
    for(let i=0;true;i++){
        if((new Date().getTime()-startTime)>ms){
            break;
        }
    }
}
function rendom(){
    console.log("hello");
}
while(true){
    customSetTimeout(5000);
    rendom();
}

