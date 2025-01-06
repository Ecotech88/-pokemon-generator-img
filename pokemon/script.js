// the  fect function is promise base, it could resolve or reject
/*fetch ("https://pokeapi.co/api/v2/pokemon/pikachu")
       .then(response =>
       {
        if(!response.ok){
            throw new Error("could not fetch resource")
        }
        return response.json();
       }
       )
       .then(data => console.log(data))
       .catch(error => console.error(error)); 
       */

// to use async and await functions

async function fetchData() {
    try {

        const pokemoneName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemoneName}`);

        if (!response.ok) {
            throw new Error("could not fetch resource");
        }
        
        const data = await response.json();
 // to fecth the front default
     const  pokemonsprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonsprite");

    imgElement.src = pokemonsprite;
    imgElement.style.display = "block";
    } catch (error) {
        console.error(error);
    }
}