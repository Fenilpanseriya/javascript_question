export const handleSearch=async (value)=>{
    console.log(value)
    let data;
    const res=await fetch("./data.json").then((res)=>{
        data=res.json();
        return data;
    })
    .catch((err)=>{
        console.log("error is ",err.message);
    })
    console.log(res)
    let filteredData=res?.fruits?.filter((fruit)=>fruit.name?.toLowerCase().includes(value?.toLowerCase()))
    return filteredData;
    
}

export const deBounce = (fn, delay = 500) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
};