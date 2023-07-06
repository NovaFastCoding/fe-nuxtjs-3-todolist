<template>
	<div class="wrapper">
		<div class="content">
			<AddTodo />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AddTodo from './src/components/addTodo/index.vue';

export default defineComponent({
	name: 'App',
	components: {
		AddTodo,
	},
});
</script>

<style>
@import './src/assets/global.scss';
@import './src/assets/app.scss';
</style>
