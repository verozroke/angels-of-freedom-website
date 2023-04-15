<template>
    <div class="post">
        <div class="post__info">
            <div class="post__title">Донат</div>
            <div v-if="donate.name" class="post__name"><b>Имя</b>: {{ donate.name }}</div>
            <div v-if="donate.surname" class="post__surname"><b>Фамилия</b>: {{ donate.surname }}</div>
            <div class="post__sum"><b>Сумма</b>: {{ donate.sum }} тг.</div>
            <div class="post__date"><b>Время</b>: {{ date + ' ' + time }}</div>
            <div class="post__status"><b>Статус</b>: <b :style="{'color': donate.payment ? 'green' : 'red'}">{{ donate.payment ? 'Оплачено' : 'Не оплачено' }}</b></div>    
        </div>
        <div v-if="!donate.payment" class="post__box">
            <div @click="confirmPayment(donate)" class="post__button">Подтвердить оплату</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const props = defineProps({
    donate: Object,
})

const date = ref(new Date(props.donate.date).toLocaleDateString('en-US'))
const time = ref(new Date(props.donate.date).toLocaleTimeString('en-US') )


const confirmPayment = async (donate) => {
    donate.payment = true
    const data = await axios.put(`http://localhost:3010/api/admin/update/donate/${donate._id}`, donate, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    })

}


</script>

<style lang="scss" scoped>
.post {
    display: flex;
    font-family: 'Open Sans', sans-serif;
    border: 1px solid #000;
    width: 500px;
    background-color: #fff;
    height: auto;
    color: #000;
    padding: 1em 1em;
    filter: drop-shadow(.3em .3em .3em rgba(0, 0, 0, 0.33));
    gap: .5em;
    align-items: left;
    &__title {
        font-size: 16px;
        color: #005acc;
        font-weight: 700;
    }
    &__info {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: left;
        text-align: start;
        gap: .5em;
    }
    &__box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
    }
    &__button {
        cursor: pointer;
        width: 200px;
        font-size: 14px;
        color: #fff;
        height: 50px;
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