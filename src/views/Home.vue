<template>
  <div class="home">
    <div class="loader-container" v-if="$apollo.loading">
      <Loader />
    </div>
    <Toast :context="error" />
    <main v-if="pokemons && !$apollo.loading">
      <Search @searching="getSearchQuery"/>
      <div>
        <transition-group name="items" tag="div" class="pokemon-list">
          <article v-for="pokemon in pokemons" :key="pokemon.id">
           <h2>{{ pokemon.name }} </h2>
            <img :src="pokemon.image" :alt="` A ${pokemon.name} picture`" />
          </article>
        </transition-group>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import { GET_POKEMONS, GET_POKEMON } from '@/graphql/pokemons.js'

export default {
  name: 'home',
  data () {
    return {
      pokemon: [],
      pokemons: [],
      error: null,
      context: null,
      searchQuery: ''
    }
  },
  components: {
    Toast: () => import('@/components/Toast'),
    Loader: () => import('@/components/Loader'),
    Search: () => import('@/components/Search')
  },
  methods: {
    getSearchQuery: function (searchQuery) {
      this.searchQuery = searchQuery
      this.getPokemon()
    },
    getPokemon: function () {}
  },
  async mounted () {

  },
  apollo: {
    pokemons: {
      query: GET_POKEMONS,
      error (error) {
        this.error = JSON.stringify(error.message)
        this.context = 'error'
        setTimeout(() => {
          this.context = ''
          this.error = ''
        }, 1000)
      },
      loadingKey: 'loading'
    },
    pokemon: {
      query: GET_POKEMON,
      variables () {
        return {
          name: this.searchQuery
        }
      },
      skip () {
        return !this.searchQuery
      },
      error (error) {
        this.error = JSON.stringify(error.message)
        this.context = 'error'
        setTimeout(() => {
          this.context = ''
          this.error = ''
        }, 1000)
      }
    }
  }
}
</script>
<style >

.loader-container{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center
}
.pokemon-list{
  display: grid;
  grid-template-columns: auto auto;
}
article{
  margin: 2rem 0
}
</style>
