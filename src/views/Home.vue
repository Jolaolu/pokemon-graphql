<template>
  <div class="home">
   <div v-if="pokemons">
      <div v-for="pokemon in pokemons" :key="pokemon.id">
        {{ pokemon.name }}
        <img :src="pokemon.image" :alt="` A ${pokemon.name} picture`"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { GET_POKEMONS } from '@/graphql/pokemons.js'

export default {
  name: 'home',
  data () {
    return {
      pokemons: [],
      error: null
    }
  },
  components: {
  },
  async mounted () {
    // this.loading = true
    // this.loading = false
  },
  apollo: {
    pokemons: {
      query: GET_POKEMONS,
      error (error) {
        this.error = JSON.stringify(error.message)
      }
      // loadingKey: 'loading'
    }
  }
}
</script>
