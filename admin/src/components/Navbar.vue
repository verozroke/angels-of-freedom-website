<template>
    <div class="header">
        <RouterLink :to="{name: 'Home'}" class="header__home">НА ГЛАВНУЮ</RouterLink>
    </div>
</template>

<script setup>

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

</style>