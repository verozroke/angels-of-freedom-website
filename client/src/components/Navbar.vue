<template>
    <div class="header">
        <RouterLink :to="{name: 'Home'}" class="header__home">НА ГЛАВНУЮ</RouterLink>
        <ul class="header__language-choose">
            <li @click="changeLocale('en')" class="header__language">Eng</li>
            <li @click="changeLocale('kz')" class="header__language">Қаз</li>
            <li @click="changeLocale('ru')" class="header__language">Рус</li>
        </ul>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const {t, locale} = useI18n({useScope: 'global'});

const changeLocale = (localeName) => {
    locale.value = localeName
}
</script>

<style lang="scss" scoped>

.header {
    background-color: rgb(41, 41, 41);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    width: 100%;
    height: 73px;
	font-family: 'Noto Sans', sans-serif;
    &__home {
        letter-spacing: 3px;
        color: #fec50c;
        font-weight: 400;
        cursor: pointer;
    }
    &__language {
        color: #fec50c;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;

    }
    &__language-choose {
        display: flex;
        gap: 20px;
    }
}

@media only screen and (max-width: 500px) {
    .header{
        &__home {
            font-size: 13px;
        }
    } 
}

</style>