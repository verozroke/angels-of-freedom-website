<template>
    <div class="modal__overlay">
        <div class="modal__wrapper">
            <div class="modal__box">
                <div class="modal__title">{{ $t('payment-modal.title') }}</div>
                <ul v-if="!isGP && !isQR" class="modal__list">
                    <li @click="openGP" class="modal__el"><img src="../img/icons/google-pay.png" alt="">Google Pay</li>
                    <a target="_blank" href="https://www.donationalerts.com/r/verozroke"><li class="modal__el"><img src="../img/icons/donation-alerts.png" alt="">Donation Alerts</li></a>
                    <li @click="openQR" class="modal__el"><img style="border-radius: 50%;" src="../img/icons/kaspi.png" alt="">Kaspi QR</li>
                    <a target="_blank" href="https://donate.qiwi.com/payin/verozrole"><li class="modal__el"><img src="../img/icons/qiwi.png" alt="">Qiwi</li></a>
                    <li @click="openGP" class="modal__el"><img src="../img/icons/credit-card.webp" alt="">{{ $t('payment-modal.credit-card') }}</li>
                </ul>
                <ul v-if="isGP" class="modal__list-gp">
                    <GoogleButton/>
                    <button @click="isGP = false">{{ $t('payment-modal.back') }}</button>
                </ul>
                <ul v-if="isQR" class="modal__list-qr">
                    <img src="../img/qr.png" alt="">
                    <button @click="isQR = false">{{ $t('payment-modal.back') }}</button>
                </ul>
            </div>  
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import GoogleButton from '../components/GoogleButton.vue'

const isGP = ref(false)
const isQR = ref(false)

const openGP = () => {
    isGP.value = true
}
const openQR = () => {
    isQR.value = true
}


</script>

<style lang="scss" scoped>

.modal {
    &__overlay {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
    }
    &__wrapper {
        display: table-cell;
        vertical-align: middle;
    }
    &__box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 800px;
        height: 500px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        gap: 3em;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
    }
    &__title {
        font-size: 40px;
        text-align: center;
        font-weight: 700;
    }
    &__list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1em;
        & a {
            color: #000;
            &:visited {
                color: #000;
            }
        }
        &-qr {
            display: flex;
            flex-direction: column;
            align-items: center;
            & img {
                width: 300px;
            }
            & button {
                width: 150px;
                cursor: pointer;
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
        &-gp {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2em;
            & button {
                width: 150px;
                cursor: pointer;
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
    }
    &__el {
        gap: .5em;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px solid rgb(229,229,229);
        width: 200px;
        height: 100px;
        border-radius: .5em;
        text-align: center;
        & img {
            height: 50px;
            width: 50px;
        }
    }
}

@media only screen and (max-width: 820px) {
    .modal {
        &__title {
            font-size: 24px;
        }
        &__box {
            width: 500px;
        }
    }
}

@media only screen and (max-width: 520px) {
    .modal {
        &__title {
            font-size: 24px;
        }
        &__box {
            width: 350px;
            height: 700px;
        }
        &__list {
            flex-wrap: nowrap;
            flex-direction: column;
        }
        
    }
}

</style>