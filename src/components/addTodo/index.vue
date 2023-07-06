<template>
	<div class="addTodo">
		<div class="nameTodo">
			<input type="text" v-model="newTodo.name" placeholder="Your todo..." />
		</div>
		<input type="date" v-model="newTodo.deadline" />
		<button @click="addNewTodo">+</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'addTodo',
	data() {
		return {
			newTodo: {
				name: '',
				deadline: '',
			},
		};
	},
	methods: {
		addNewTodo() {
			if (this.newTodo.name && this.newTodo.deadline) {
				const newTodo = {
					id: Date.now(),
					name: this.newTodo.name,
					deadline: this.newTodo.deadline,
					isCompleted: false,
				};

				console.log(newTodo);

				this.newTodo = {
					name: '',
					deadline: '',
				};
			}
		},
	},
});
</script>

<style scoped>
@import './index.scss';
</style>
