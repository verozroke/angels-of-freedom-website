<template>
<div class="angel">
        <div class="angel__container">
            <div class="angel__title">{{ $t('free-charity.title') }}</div>
            <form class="angel__form">
                <div class="angel__choose">
                    <div style="" ><input v-model="isAnonimus" style="margin-right: 10px;" type="checkbox" name="anon"><label for="anon">{{ $t('free-charity.anon') }}</label></div>
                </div>
                <div class="angel__info">
                    <label :hidden="isAnonimus" for="name">{{ $t('free-charity.labels.name') }}</label>
                    <input v-model="inputName" :hidden="isAnonimus" name="name" :placeholder="$t('free-charity.placeholders.name')" type="text">
                    <label :hidden="isAnonimus" for="surname">{{ $t('free-charity.labels.surname') }}</label>
                    <input v-model="inputSurname" :hidden="isAnonimus" name="surname" :placeholder="$t('free-charity.placeholders.surname')" type="text">
                    <label for="sum">{{ $t('free-charity.labels.sum') }}</label>
                    <input v-model="inputSum" name="sum" :placeholder="$t('free-charity.placeholders.sum')" type="text">
                </div>
                <button @click.prevent="sendDonate" class="angel__button" >{{ $t('free-charity.donate') }}</button>
            </form>
            <transition name="payment">
                <PaymentModal v-if="isModalOpen"/>
            </transition>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import PaymentModal from '../components/PaymentModal.vue';
import axios from 'axios'
import { useRouter } from 'vue-router';

const router = useRouter()


// for requests
const isAnonimus = ref(false)
const inputName = ref('');
const inputSurname = ref('');
const inputSum = ref('');

const isModalOpen = ref(false)

const sendDonate = async () => {
    isModalOpen.value = true
    const donate = {
        name: inputName.value,
        surname: inputSurname.value,
        sum: inputSum.value,
        payment: false,
        date: Date.now()
    }
    const response = await axios.post('http://localhost:3010/api/donate/donate', donate, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    // router.push({name: 'Donations'})
}



</script>

<style lang="scss" scoped>
.angel {
    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        gap: 3em;
    }
    &__title {
        font-size: 40px;
        font-weight: 700;

        text-align: center;
    }
    &__form {
        gap: 2em;
        width: 550px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__choose {
        gap: 1em;
        display: flex;
    }
    &__info {
        gap: 1em;
        display: flex;
        flex-direction: column;
        & input {
            height: 50px;
            padding: 20px 10px;
            border-radius: .4em;
            width: 550px;
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
    }
    &__button {
        width: 200px;
        font-size: 18px;
        color: #fff;
        font-weight: 700;
        padding: 20px 10px;
        background-color: #005acc;

        border-radius: .4em;
        transition: .4s;
        &:hover {
            transition: .4s;
            color: #000;
            background-color: #ffd800;
        }
    }
}

.payment-enter-active,
.payment-leave-active {
  transition: opacity 0.5s ease;
}

.payment-enter-from,
.payment-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 570px) {
    .angel {
        &__title {
            font-size: 24px;
        }
        &__info {
            & input {
                width: 320px;
                
            }
        }
        &__choose {
            flex-direction: column;
            text-align: center;
            width: 350px;
        }
    }
}
</style>