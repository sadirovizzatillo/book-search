<template>
  <form class="search-form" @submit.prevent="SearchBook">
    <input v-model="search" class="search-form__input" type="search" />
    <button type="submit">search</button>
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

<style lang="scss" scoped>
</style>