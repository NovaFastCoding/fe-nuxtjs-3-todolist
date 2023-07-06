<template>
	<div class="addTodo">
		<div class="nameTodo">
			<input type="text" v-model="newTodo.nameTodo" placeholder="Your todo..." />
		</div>
		<input type="date" v-model="newTodo.deadlineTodo" />
		<button @click="addNewTodo">+</button>
	</div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { Apis } from '../../constants';

interface Todo {
	nameTodo: string;
	deadlineTodo: string;
	isCompleted?: boolean;
}

export default defineComponent({
	name: 'addTodo',
	data() {
		return {
			newTodo: {
				nameTodo: '',
				deadlineTodo: '',
			} as Todo,
		};
	},
	methods: {
		addNewTodo(): void {
			if (this.newTodo.nameTodo && this.newTodo.deadlineTodo) {
				const newTodo: Todo = {
					nameTodo: this.newTodo.nameTodo,
					deadlineTodo: this.newTodo.deadlineTodo,
					isCompleted: false,
				};

				axios
					.post(Apis.todo.create, newTodo)
					.then((res) => {
						console.log(res);
						this.newTodo = {
							nameTodo: '',
							deadlineTodo: '',
						};
					})
					.catch((error: any) => {
						console.error(error);
					});
			}
		},
	},
});
</script>

<style scoped>
@import './index.scss';
</style>
