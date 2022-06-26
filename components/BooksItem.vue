<template>
    <li class="books-item">
        <div v-if="bookImage">
            <img :src="bookImage.smallThumbnail" alt="">
        </div>
        <p v-else>No Image</p>
        <div class="books-item__info-wrapper">
            <h4 class="books-item__info-title">{{ bookItem.title }}</h4>
            <p class="books-item__info-description">{{ bookItem.description}}</p>

            <router-link class="book-item__btn" :to="{ name: 'book-id', params:{ book: bookItem } }">Ko'rish</router-link>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'BooksItem',
        props:{
            book:{
                type:Object,
                required:true
            }
        },
        computed:{
            bookItem(){
                return this.book.volumeInfo
            },
            bookImage(){
                return this.book.volumeInfo.imageLinks
            }
        },
    }
</script>

<style scoped>
    @import url("../static/app.css");

    .books-item{
        display: flex;
        padding: 24px;
        flex-direction: column;
        max-width: 350px;
        background: #FFFFFF;
        /* Shadow -2 */

        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }
    .books-item__info-wrapper{
        display: flex;
        flex-direction: column;
    }
    .books-item__info-title{
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        color: black;
        margin-bottom: 12px;
    }
    .books-item__info-description{
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #616265;
        margin-bottom: 24px;
    }
     a{
        background-color: #2364D2;
        padding: 5px 0;
        width: 100%;
        text-decoration: none;
        color: #fff;
        display: flex;
        justify-content: center;
        border-radius: 8px;
    }
</style>