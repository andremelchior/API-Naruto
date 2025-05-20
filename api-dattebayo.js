//Exercicio: Consumir o endpoint /characters do Dattebayo API 
//e recuperar a lista de jutsus e a primeira imagem do primeiro personagem

const route = 'characters'
let ids = []

fetch(`https://dattebayo-api.onrender.com/${route}`, {
    method: 'GET',
    headers: {
        Accept: 'application/json'
    }
})
.then((response) => response.json())
.then((data) => {
    for(let i = 0; i < data.characters.length; i++){
        ids[i] = data.characters[i].id;

        // console.log(data.characters[i]);

        fetch(`https://dattebayo-api.onrender.com/${route}/${ids[i]}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) =>
                console.log(
                    `ID: ${ids[i]}\nNome: ${data.name}\nTools: ${data.tools}\n`
                )
            )
            .catch((error) => console.error(error));
    }
}
).catch((error) => console.error(error))

