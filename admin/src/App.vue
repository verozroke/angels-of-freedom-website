<script setup>
import FooterVue from '../../client/src/components/FooterVue.vue';
import Navbar from './components/Navbar.vue';

</script>

<template>
    <navbar/>
    <div class="wrapper">
        <router-view  v-slot="{ Component }">
            <transition name="routering" mode="out-in">
                <component :is="Component"></component>
            </transition>
        </router-view>
    </div>
    <footer-vue/>
</template>

<style lang="scss">
.routering {
	&-enter-from {
		opacity: 0;
		transform: translateX(1000px);
	}
	&-enter-active {
		transition: all 0.3s ease-out;
	}
	&-leave-to {
		opacity: 0;
		transform: translateX(-1000px);
	}
	&-leave-active {
		transition: all 0.3s ease-in;
	}
}

.main {
  flex: 1 1 auto;
}

.wrapper {
    display: flex;
    flex-direction: column;
    overflow: clip;
    min-height: 100vh;
    background-color: #fff;
}

[class*="__container"] {
    max-width: 1200px;
    margin: 0 auto;
	font-family: 'Noto Sans', sans-serif;
    font-size: 16px;
    color: #000;
    font-weight: 400;
    font-style: normal;   
}
</style>
