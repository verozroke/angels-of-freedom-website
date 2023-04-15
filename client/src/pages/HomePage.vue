<template>
    <div class="home">
        <div class="home__overlay">
            <div class="home__container">
                <ClipboardWindow :is-active="isClipActive"/>
                <div class="home__title">{{ $t('home.title') }}</div>
                <div class="home__subtitle">Біз біргеміз! Ми разом! We are together!</div>
                <ul class="home__buttons">
                    <li class="home__button" @click="clip('http://angelsoffreedom.kz/')" id="share-button">{{ $t('home.share') }}</li>
                    <RouterLink class="home__button" :to="{name: 'Donations'}">{{ $t('home.donate') }}</RouterLink>
                </ul>
                <a target="_blank" href="https://wa.me/380674407634?text=%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C%20%D0%B4%D0%BE%D0%BD%D0%B0%D1%82" class="home__button" id="contact-button"><img src="../img/whatsapp-icon.png" alt="">{{ $t('home.contact') }}</a>
            </div>
        </div>
    </div>
        
</template>

<script setup>
import ClipboardWindow from '../components/ClipboardWindow.vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const {t} = useI18n();

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
        width: 100%;
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


@media only screen and (max-width: 770px) {
    .home {
        &__title {
            font-size: 30px;
            width: 500px;
        }
        &__subtitle {
            font-size: 24px;
        }
    }
}

@media only screen and (max-width: 500px) {
    .home {
        &__title {
            font-size: 22px;
            width: 350px;
        }
        &__subtitle {
            font-size: 20px;
            width: 250px;
        }
        &__buttons {
            flex-direction: column;
        }
    }
}
</style>