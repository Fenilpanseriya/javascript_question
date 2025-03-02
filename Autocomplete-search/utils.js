export const getData = () => {
    let timer;
    return new Promise((resolve, reject) => {
        clearInterval(timer);
        timer = setTimeout(() => {
            fetch('./data.js') // Assuming data.json is the file you want to fetch
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        }, 1000);
    });
}
