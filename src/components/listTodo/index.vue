<template>
	<div class="listTodo">
		<div v-if="sortedFilteredTodos.length === 0" class="noTodo">
			<img :src="pathImages.noTodo.src" :alt="pathImages.noTodo.alt" />
			<h3>{{ noTodoText }}</h3>
		</div>
		<div v-else class="existenceTodo">
			<div class="todos">
				<div
					v-for="(todo, index) in sortedFilteredTodos"
					:key="todo.id"
					:class="todo.isCompleted ? 'itemTodo completedTodo' : 'itemTodo'"
				>
					{{ index }}
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { PathImages, Text, Numbers, WarningToastOptions, ToastOptions, SuccessfulMessages } from '../../constants';
import axios from 'axios';
import { Apis } from '../../constants';

export default defineComponent({
	name: 'listTodo',
	data() {
		return {
			pathImages: {
				noTodo: {
					src: PathImages.noTodo,
					alt: Text.alt.noTodo,
				},
			},
			noTodoText: Text.textInTag.noTodo,
			symbols: {
				dot: Text.symbol.dot,
				colon: Text.symbol.colon,
			},
			textInTag: {
				deadline: Text.textInTag.deadline,
			},
			toastQueue: [],
		};
	},
	setup() {
		const sortedFilteredTodos = ref([]);
		const getAllTodos = async () => {
			try {
				const res = await axios.get(Apis.todo.getAll);
				sortedFilteredTodos.value = res.data.data;
			} catch (error) {
				console.log(error);
			}
		};

		getAllTodos();

		return { sortedFilteredTodos };
	},
});
</script>

<style>
@import './index.scss';
</style>
