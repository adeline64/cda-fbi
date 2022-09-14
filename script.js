// API à requêter :
const url = "https://api.fbi.gov/wanted";

// Promise
fetch(url)
    .then(function(rep) {

        rep.json().then(function(data) {
            
            for(let i in data.items) {
                 console.log(data.items[i].title);
            }
        })
})


// Async/Await 
async function getMostWanted()  {
    const response = await fetch(url);
    const data = await response.json();
    for(let i in data.items) {
        console.log(data.items[i].title);
    }
}

getMostWanted();