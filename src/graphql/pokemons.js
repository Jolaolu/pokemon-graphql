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
