<template>
    <div class="clipboard" :class="{'active': isActiveRef}" id="clip-box">{{ $t('clipboard') }}</div>
</template>

<script setup>
import { toRef } from 'vue';

const props = defineProps({
    isActive: Boolean
})

const isActiveRef = toRef(props, 'isActive')

</script>

<style lang="scss" scoped>
.clipboard {
	font-family: 'Montserrat', sans-serif;
	font-weight: 300;
	letter-spacing: 0.2px;
	position: absolute;
	z-index: 20;
	top: -100px;
	text-align: center;
	color: #fff;
	padding: 10px 20px;
	border-radius: .3em;
	background-color: rgba(0, 0, 0, 0.5);
	transition: .4s
}

.clipboard.active {
	top: 15px;
}

</style>