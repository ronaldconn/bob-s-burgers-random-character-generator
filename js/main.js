//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
  
  let idNum = Math.floor(Math.random() * 500);

  // https://bobsburgers-api.herokuapp.com//characters?name=${bob}

    fetch(`https://bobsburgers-api.herokuapp.com/characters/`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      

      document.querySelector("h2").innerHTML = data[idNum].name
      document.querySelector("img").src = data[idNum].image
      document.querySelector("h3").innerHTML = `Voiced by: ${data[idNum].voicedBy}`
      document.querySelector("span").innerHTML = `<a href="${data[idNum].wikiUrl}">${data[idNum].wikiUrl}</a>`


    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

