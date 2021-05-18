// export default function ({ $axios, store }, inject) {
//     const starWarsApi = $axios.create()
//     const pokemonApi = $axios.create()

//     starWarsApi.setBaseUrl('https://swapi.dev/api')
//     pokemonApi.setBaseUrl('https://pokeapi.co/api/v2')

//     const token = store.state.currentUser.token
//     starWarsApi.setToken(token, 'Bearer')
//     pokemonApi.setToken(token, 'Bearer')

//     starWarsApi.onResponse((response) => {
//         if (response.status === 404) {
//             console.log('Oh no it returned a 404')
//         }
//     })

//     inject('starWarsApi', starWarsApi)
//     inject('pokemonApi', pokemonApi)
// }
