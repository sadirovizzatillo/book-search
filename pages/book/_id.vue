<template>
  <div>
    <Loading v-if="loading" />
    <div class="single-book" v-else>
      <router-link to="/Books">Back</router-link>
      <div class="single-book__wrapper">
        <img :src="singleBookImage" alt="" />
        <div>
          <p>Book Title: {{ singleBook.title }}</p>
          <p>Book Descriptio.: {{ singleBook.description }}</p>
          <p>Book Author: {{ singleBook.authors[0] }}</p>
          <p>Book Sudjet: {{ singleBook.categories[0] }}</p>
          <p>Published Date: {{ singleBook.publishedDate }}</p>
          <a target="_blank" :href="singleBook.previewLink">
            Here You can find more info about this book...
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../../library/Loading.vue'
export default {
  name: 'BookSingle',
  components: { Loading },

  data() {
    return {
      loading: false,
      id: this.$route.params.id,
    }
  },
  computed: {
    singleBook() {
      return this.$route.params.book
    },
    singleBookImage() {
      return this.$route.params.book.imageLinks.thumbnail
    },
  },
  created() {
    console.log(this.singleBook)
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
}
</script>

<style  scoped>
.single-book {
  color: #616265;
  display: flex;
  font-size: 18px;
  flex-direction: column;
}
.single-book img {
  height: 450px;
  object-fit: contain;
  margin-right: 32px;
}
.single-book__wrapper {
  display: flex;
}
a {
  margin-bottom: 24px;
  color: #2364d2;
  text-decoration: none;
}

@media screen and (max-width: 700px) {
  .single-book__wrapper {
    flex-direction: column;
  }
  .single-book img {
    height: 350px;
    object-fit: fill;
  }
}

@media screen and (max-width: 550px) {
  .single-book__wrapper {
    flex-direction: column;
  }
}
</style>