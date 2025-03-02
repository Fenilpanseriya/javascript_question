import { getData } from "./utils.js";

// Get DOM elements
const inputEle = document.getElementById("search");
const section = document.querySelector(".section");


const handleSearch = async (value) => {
    try {
        // Fetch data
        const data = await getData();
        console.log(data)
        if (data) {
            
            const result = data.filter((item) => {
                return item.toLowerCase().includes(value.toLowerCase());
            });

            
            section.innerHTML = "";

            
            result.forEach((item) => {
                const div = document.createElement("div");
                div.classList.add("parent");
                const itemDiv = document.createElement("div");
                itemDiv.innerText = item;
                itemDiv.classList.add("item");
                itemDiv.setAttribute("itemValue", item);
                div.appendChild(itemDiv);
                section.appendChild(div);
            });
        }
    } catch (error) {
        console.error("Error in handleSearch:", error.message);
    }
};


// Attach event listeners
inputEle.addEventListener("input", async (e) => {
    try {
        const { value } = e.target; 
        console.log("Input value:", value); // Log input value
        await handleSearch(value)
    } catch (error) {
        console.error("Error in handleInput:", error.message);
    }
});

// Event listener for click events on search results
section.addEventListener("click", (e) => {
    try {
        e.preventDefault();
        const { itemValue } = e.target.dataset;
        inputEle.value = itemValue;
        section.innerHTML = ""; 
    } catch (error) {
        console.error("Error in click event:", error);
    }
});
