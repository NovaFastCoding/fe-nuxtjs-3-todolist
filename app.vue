<template>
	<div class="wrapper">
		<div class="content">
			<HeaderComponent />
			<div class="filtersAndSearch">
				<Search />
				<Filters />
			</div>
			<ListTodo />
			<AddTodo />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AddTodo from './src/components/addTodo/index.vue';
import HeaderComponent from './src/components/headerComponent/index.vue';
import Search from './src/components/search/index.vue';
import Filters from './src/components/filters/index.vue';
import ListTodo from './src/components/listTodo/index.vue';

export default defineComponent({
	name: 'App',
	components: {
		AddTodo,
		HeaderComponent,
		Search,
		Filters,
		ListTodo,
	},
});
</script>

<style>
@import './src/assets/global.scss';
@import './src/assets/app.scss';
</style>
