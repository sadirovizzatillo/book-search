<template>
  <div class="books">
    <Loading v-if="loading" />
    <div v-else>
      <Search />
      <ul class="books-list">
        <BooksItem v-for="(book, id) in bookList" :key="id" :book="book" />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Search from '../components/Search.vue'
import BooksItem from '../components/BooksItem.vue'
import Loading from '../library/Loading.vue'
export default {
  name: 'AllBooks',
  components: { Search, BooksItem, Loading },

  async asyncData({ $axios, store }) {
    try {
      const { data } = await $axios.get('volumes/', {
        params: { q: 'All' },
      })
      store.dispatch('setBooks', data.items)
    } catch (err) {
      console.log(err)
    }
  },

  data() {
    return {
      loading: false,
    }
  },

  computed: {
    ...mapGetters(['bookList']),
  },

  created() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
}
</script>

<style scoped>
body {
  background-color: #f5f5f5;
}
.books-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  gap: 20px;
  padding: 0;
}

@media screen and (max-width: 800px) {
  .books-list {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 550px) {
  .books-list {
    grid-template-columns: 1fr;
    justify-self: center;
  }
}
</style>