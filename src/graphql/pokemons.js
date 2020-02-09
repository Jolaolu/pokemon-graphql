import gql from 'graphql-tag'

export const GET_POKEMONS = gql`
  query pokemons{
    pokemons(first: 100){
      id
      number
      name
      image
    }
  }`

export const GET_POKEMON = gql`
  query Pokemon($name: String!){
      Pokemon(name: $name){
        id
        name
        image
      }
  }
`
