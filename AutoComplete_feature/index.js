import { deBounce, handleSearch } from "./util.js";

const inputElement=document.getElementById("search");
const searchItems=document.getElementById("search-items");

const handleRenderResult=(data=[])=>{
    data?.forEach((item)=>{
        let div=document.createElement("div");
        div.innerText=item.name
        div.style.width="200px";
        div.style.height="15px";
        div.setAttribute("item",JSON.stringify(item))
        div.style.cursor="pointer"
        searchItems.appendChild(div);
    })
}

const handleChange=async()=>{

    let value=inputElement.value;
    console.log(value)
    searchItems.innerHTML="";
    if(value!==""){
        let data=await handleSearch(value);
        console.log("filter data ",data)
        handleRenderResult(data)
    }
}
inputElement?.addEventListener("input",deBounce(handleChange,2000));

searchItems.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("clickeed-> ",e.target);
    let item = JSON.parse(e.target.getAttribute("item"));
    console.log("item->", item);
    inputElement.value = item.name;
    searchItems.innerHTML="";
})


