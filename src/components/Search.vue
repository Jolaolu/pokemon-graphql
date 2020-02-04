<template>
  <div class="search">
      <input type="search" name="search" id="" placeholder="Search for Pokemon" class="search-bar" v-model="searchQuery" @keyup="search">
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    search: function (e) {
      e.preventDefault()
      this.$emit('searching', this.searchQuery)
    }
  }
}
</script>
<style >
.search{
  margin-top: 5rem;
  margin-bottom: 3rem;
  width: 100%;
}
.search-bar{
  padding: 1rem;
  width: 100%;
  max-width: 80%;
  outline: #c4c4c4;
  font-size: 1.5rem
}
</style>
