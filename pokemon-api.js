//1)imprimir el nombre del pokemon seguido de sus tipos,
//ejemplo pikachu - electrico,tipo2


//2)hacer una lista con todos los nombres de pokemon
//charmander - charmeleon - charizard


//3)hacer una lista con todos los nombres de pokemon
// const request = require('request');


const https = require('https');



//NOMBRE DEL POKEMON Y LAS HABILIDADES QUE HACE
https.get('https://pokeapi.co/api/v2/pokemon/6' , (resp) => {
    let data = ''

resp.on('data', (chunk) => {
    data += chunk;
})

resp.on('end',() => {
    console.log(`${JSON.parse(data).species.name} tiene este tipo de habilidades:`)
    console.log(JSON.parse(data).types.map(type => type.type.name).toString());
});

}).on("error",(error) =>{
    console.log(`Error: ${error.message}`);
})






//GET ALL POKEMONS
https.get('https://pokeapi.co/api/v2/pokemon/' , (resp) => {
    let data = ''

resp.on('data', (chunk) => {
    data += chunk;
})

resp.on('end',() => {
    console.log(JSON.parse(data).results.map(resul => resul.name).toString());
});

}).on("error",(error) =>{
    console.log(`Error: ${error.message}`);
})






//SOLO LOS 3 POKEMONS
https.get('https://pokeapi.co/api/v2/pokemon/?offset=3&limit=3' , (resp) => {
    let data = ''

resp.on('data', (chunk) => {
    data += chunk;
})

resp.on('end',() => {
    console.log(` Los 3 pokemones son: ${JSON.parse(data.toString()).results.map(resul => resul.name).toString()}`);
});

}).on("error",(error) =>{
    console.log(`Error: ${error.message}`);
})







