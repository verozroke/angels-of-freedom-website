<template>
    <div class="home">
        <div class="home__overlay">
            <div class="home__container">
                <div class="home__title">Добро пожаловать волонтёр</div>
                <div class="home__subtitle">Біз біргеміз! Ми разом!</div>
                <ul class="home__buttons">
                    <RouterLink v-if="!isAuth" class="home__button" id="charity-button" :to="{name: 'Auth'}">Войти</RouterLink>
                    <RouterLink v-if="isAuth" class="home__button" id="charity-button" :to="{name: 'Panel'}">Панель</RouterLink>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import ClipboardWindow from '../../../client/src/components/ClipboardWindow.vue';
import axios from 'axios'
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

let admin = {}
const isAuth = ref(false)

onMounted(async function() {
        const response = await axios.get('http://localhost:3010/api/admin/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
        console.log(response)
        if(response.data.login === 'admin') {
            isAuth.value = true
        }
        admin = response.data
        // .sortBy(function(o){ return o.date }).reverse();
    
})


const isClipActive = ref(false)
const clip = (text) => {
    navigator.clipboard.writeText(text);
    window.getSelection().removeAllRanges()
    isClipActive.value = true
    setTimeout(() => {
        isClipActive.value = false
    }, 3000)
    
}
</script>

<style lang="scss" scoped>
.home {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
    background-image: url('../img/hero-bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    &__container {
        height: 100vh;
        width: 100vh;
        display: flex;
        letter-spacing: 1px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
    &__overlay {
        backdrop-filter: blur(3px);
        background-color: rgba($color: #000000, $alpha: 0.5);
    }
    &__title {
        width: 900px;
        font-weight: 700;
        font-size: 50px;
        line-height: 1.2;
        margin-bottom: .5em;
        text-align: center;
    }
    &__subtitle {
        width: 800px;
        font-weight: 300;
        line-height: 1.2;
        font-size: 34px;
        margin-bottom: 1em;
        text-align: center;
    }
    &__button {
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
    &__buttons {
        display: flex;
        gap: 1em;
        margin-bottom: 1em;
    }
}

#share-button {
    
}

// #charity-button {
//     background-color: #ffd800;
//     color: #000;
//     &:hover {
//         color: #fff;
//         background-color: #005acc;
//     }
// }

#contact-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    width: 250px;
    background-color: #1bd741;
    & img {
        height: 25px;
        width: 25px;
    }
    &:hover {
        color: #fff;
    }
}
</style>