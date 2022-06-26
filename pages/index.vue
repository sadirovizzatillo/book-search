<template>
  <div class="ok">
    <div class="sign-in">
      <Toast v-if="incorrect" :toast="toast"/>
      <form class="user-form" @submit.prevent="submitForm">
        <h1 class="user-form__title">Book app</h1>

        <div>
          <div class="user-form__wrapper">
            <label for="username"></label>
            <input
            id="username"
            v-model="inputVal"
            type="text"
            name="username"
            placeholder="UserName"
            pattern="^[a-zA-Z]+$"
            minlength="16"
            required
            @invalid="handleInvalid"
            >
          </div>

          <button class="user-form__btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Toast from '../components/Toast.vue';
  export default {
    name: "IndexPage",
    components: { Toast },
    data(){
      return{
        incorrect:false,
        inputVal:'',
        toast:""
      }
    },
    methods:{
      handleInvalid(e) {
        this.toast = e.target.validationMessage
        this.incorrect = true

        setTimeout(() => {
          this.incorrect = !this.incorrect
        }, 2000)
      },
      submitForm(){
        if(this.inputVal !== ""){
          this.$router.push("/Books")
        }
      }
    }
  }
</script>

<style scoped>
  @import url("../static/app.css");
  .sign-in{
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
  }
  body{
    background-color: #F5F5F5;
  }
  .user-form__title{
    color: #5D5FEF;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    margin: 0;
    margin-bottom: 18px;
  }
  .user-form{
    background: #FFFFFF;
    align-items: center;
    display: flex;
    flex-direction: column;
    border-radius: 14px 10px 2px;
    width: 300px;
    padding: 40px;
    filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.25));
  }

  .user-form__wrapper input{
    border: 2px solid #D9D9D9;
    border-radius: 8px;
    outline: none;
    padding: 8px 20px;
    margin-bottom: 12px;
    max-width: 100%;
  }
  .user-form__wrapper input:focus{
    border-color: #5D5FEF;
  }
  .user-form__btn{
    background-color: #5D5FEF;
    color: #FFFFFF;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    padding: 11px 0;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .user-form__btn:hover{
    opacity: 0.8;
  }
  .ok{
    height: 100vh;
  }
</style>
