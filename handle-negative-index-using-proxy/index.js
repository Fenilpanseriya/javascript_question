const letters = ['a', 'b', 'c', 'd', 'm'];
const proxy = new Proxy(letters, {
    get(target, prop) {
        console.log("target "+target)
        if (!isNaN(prop)) {
            console.log("prop "+prop)
            prop = parseInt(prop, 10);//base 10 decimal
            if (prop < 0) {
                prop += target.length;
            }
        }
        return target[prop];
    }
});
document.getElementById("index0").innerText=proxy[0];
document.getElementById("index-1").innerText=proxy[-1];