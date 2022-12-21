const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 1) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit${limit}`
return fetch(url)
.then((response) => response.json()) //body convertido em json
.then((jsonBody) => jsonBody.results)//apresentando o body convertido em json
.catch((error) => console.error(error))
}