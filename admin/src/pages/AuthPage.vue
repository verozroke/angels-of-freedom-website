<template>
<div class="login">
    <div class="login__container">
            <div class="login__title">Вход</div>
            <form action="">
                <div class="form-group">
                    <label for="login">Логин</label>
                    <input name="login" id="login" placeholder="Введите ваш логин" v-model="userLogin" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label for="password">Пароль</label>
                    <input name="password" id="password" autocomplete="on" placeholder="Введите ваш пароль" v-model="password" type="password" class="form-control">
                </div>
                <button @click.prevent="handlerSubmit" class="form-submit-btn">Войти</button>
            </form>
        </div>
</div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const userLogin = ref('')
const password = ref('')



const handlerSubmit = async () => {
const body = {
    login: userLogin.value,
    password: password.value,
}
try {
    axios.post('http://localhost:3010/api/admin/login', body, {
    headers: {
        'Content-Type': 'application/json'
    }
    }).then((res) => {
        localStorage.setItem('token', res.data.token)
        router.push({name: 'Panel'});
        // window.location.href = "/manager-for-5OSI/#/"
        // setTimeout("location.reload(true);", 0)
    })
} catch(e) {
    console.log(e)
}

}



</script>

<style lang="scss" scoped>
.login {
    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    &__title {
        width: 900px;
        font-weight: 700;
        font-size: 50px;
        line-height: 1.2;
        margin-bottom: .5em;
        text-align: center;
    }
    & form {
        display: flex;
        flex-direction: column;
        width: 500px;
        gap: 1em;
        align-items: center;
    }
}

.form {
    &-group {
        display: flex;
        flex-direction: column;
        gap: .5em;
        & input {
            font-size: 16px;
            color: #000;
            border-radius: .25em;
            padding: 1em 1em;
            background-color: #fff;
            width: 500px;
            border: 1px solid #000;
            &::placeholder {
                color: #5a5a5a6d;
            }
            &::-webkit-input-placeholder       {opacity: 1; transition: opacity 0.3s ease;}
            &::-moz-placeholder                {opacity: 1; transition: opacity 0.3s ease;}
            &:-moz-placeholder                 {opacity: 1; transition: opacity 0.3s ease;}
            &:-ms-input-placeholder            {opacity: 1; transition: opacity 0.3s ease;}
            &:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
            &:focus::-moz-placeholder          {opacity: 0; transition: opacity 0.3s ease;}
            &:focus:-moz-placeholder           {opacity: 0; transition: opacity 0.3s ease;}
            &:focus:-ms-input-placeholder      {opacity: 0; transition: opacity 0.3s ease;}
        }
        & label {
            // color: #4a47ff;
            font-size: 18px;
            font-family: 'Open Sans', sans-serif;
            font-weight: 500;
        }
        
    }
    &-submit-btn {
        cursor: pointer;
        width: 230px;
        font-size: 18px;
        color: #fff;
        font-weight: 700;
        padding: 20px 10px;
        background-color: #005acc;
        text-align: center;
        border-radius: .4em;
        transition: .4s;
        & a {
            transition: .4s;
            color: #fff;
        }
        &:hover {
            & a {
                transition: .4s;
                color: #000;
            }
            transition: .4s;
            color: #000;
            background-color: #ffd800;
        }
    }
}
</style>