<template>
    <div class="panel">
        <div class="panel__container">
            <div class="panel__title">Донаты</div>
            <div class="panel__box">
                <div class="panel__angel-box">
                    <div class="panel__angel-title">Ангелы Свободы</div>
                    <ul class="panel__list">
                        <li class="panel__el" v-for="angel in angelsData" :key="angel._id"><AngelPost :angel="angel"/></li>
                    </ul>
                </div>
                <div class="panel__charity-box">
                    <div class="panel__charity-title">Пожертвования</div>
                    <ul class="panel__list">
                        <li class="panel__el" v-for="donate in donatesData" :key="donate._id"><DonatePost :donate="donate"/></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import {onMounted, ref} from 'vue'
import { useRouter } from 'vue-router';
import DonatePost from '../components/DonatePost.vue';
import AngelPost from '../components/AngelPost.vue';

const router = useRouter()

const donatesData = ref([])
const angelsData = ref([])

let admin = {}

onMounted(async function() {
        const response = await axios.get('http://localhost:3010/api/admin/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
        if(response.data.success !== undefined) {
            router.push({name: 'Auth'})
        }
        admin = response.data

        const donates = await axios.get('http://localhost:3010/api/admin/donate', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
        console.log(donates.data);
        donates.data.sort(function(a,b){
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.date) - new Date(a.date);
            });
        const angels = await axios.get('http://localhost:3010/api/admin/angel', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
        console.log(angels.data);
        angels.data.sort(function(a,b){
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.date) - new Date(a.date);
            });

        angelsData.value = angels.data
        donatesData.value = donates.data

        // .sortBy(function(o){ return o.date }).reverse();
    
})
</script>

<style lang="scss" scoped>

.panel {
    height: auto;
    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
        padding: 4em 0;

    }
    &__title {
        width: 900px;
        font-weight: 700;
        font-size: 50px;
        line-height: 1.2;
        margin-bottom: .5em;
        text-align: center;
    }
    &__box {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    &__angel-box {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 45%;
    }
    &__charity-box {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 45%;
    }
    &__charity-title {
        width: 900px;
        font-weight: 700;
        font-size: 30px;
        line-height: 1.2;
        margin-bottom: .5em;
        text-align: center;
    }
    &__angel-title {
        width: 900px;
        font-weight: 700;
        font-size: 30px;
        line-height: 1.2;
        margin-bottom: .5em;
        text-align: center;
    }
    &__list {
        align-items: center;
        justify-content: center;
        gap: 1em;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
    };
}

</style>