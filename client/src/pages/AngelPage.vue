<template>
    <div class="angel">
        <div class="angel__container">
            <div class="angel__title">{{ $t('angel.title') }}</div>
            <form class="angel__form">

                <div class="angel__info">
                    <label for="name">{{ $t('angel.labels.name') }}</label>
                    <input v-model="inputName" name="name" :placeholder="$t('angel.placeholders.name')" type="text">
                    <label for="surname">{{ $t('angel.labels.surname') }}</label>
                    <input v-model="inputSurname" name="surname" :placeholder="$t('angel.placeholders.surname')" type="text">
                    <label for="phone">{{ $t('angel.labels.phone') }}</label>
                    <input v-model="inputPhone" name="phone" :placeholder="$t('angel.placeholders.phone')" type="text">
                    <label for="adress">{{ $t('angel.labels.adress') }}</label>
                    <input v-model="inputAdress" name="adress" :placeholder="$t('angel.placeholders.adress')" type="text">
                    <label for="sum">{{ $t('angel.labels.sum') }}</label>
                    <input v-model="inputSum" name="sum" :placeholder="$t('angel.placeholders.sum')" type="text">
                </div>
                <div class="angel__choose">
                    <div><input style="margin-right: 10px;" type="radio" name="angel-type" v-model="angelType" value="Ангел Свободы"><label for="angel-type">{{ $t('angel.labels.angel') }}</label></div>
                    <div><input style="margin-right: 10px;" type="radio" name="angel-type" v-model="angelType" value="Набор для изготовления ангела"><label for="angel-type">{{ $t('angel.labels.angel-set') }}</label></div>
                </div>
                <button class="angel__button" @click.prevent="sendAngel">{{ $t('angel.donate') }}</button>
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
import { useRouter } from 'vue-router'


const router = useRouter()

// for request
const angelType = ref('')
const inputName = ref('')
const inputSurname = ref('')
const inputPhone = ref('')
const inputAdress = ref('')
const inputSum = ref('')


const isModalOpen = ref(false)

const sendAngel = async () => {
    isModalOpen.value = true
    const angel = {
        name: inputName.value,
        surname: inputSurname.value,
        typeOfAngel: angelType.value,
        phone: inputPhone.value,
        adress: inputAdress.value,
        sum: inputSum.value,
        payment: false,
        date: Date.now()
    }
    const response = await axios.post('http://localhost:3010/api/angel/angel', angel, {
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
        height: 800px;
        gap: 3em;
    }
    &__title {
        font-weight: 700;

        font-size: 40px;
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
        }
    }
    
}

</style>