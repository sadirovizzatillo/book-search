<template>
  <form class="search-form" @submit.prevent="SearchBook">
    <input v-model="search" class="search-form__input" type="search" placeholder="Type something..."/>
    <button type="submit">Search</button>
  </form>
</template>

<script>
  export default {
    name: 'SearchBook',
    data() {
      return {
        search: '',
      }
    },
    methods: {
      async SearchBook() {
        try {
          const { data } = await this.$axios.get('volumes/', {
            params: { q: this.search },
          })
          console.log(data)
          this.$store.dispatch('setBooks', data.items)
        } catch (err) {
          console.log('err', err)
        }
      },
    },
  }
</script>

<style  scoped>

  .search-form{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aqua;
    padding: 8px;
  }
  .search-form__input{
    padding: 8px;
    border-radius: 8px;
    outline: none;
    border: none;
    margin-right: 8px;
  }

  .search-form button{
    background-color: #2364D2;
    border-radius: 8px;
    border: none;
    color: white;
    padding: 8px;
    cursor: pointer;
  }
</style>