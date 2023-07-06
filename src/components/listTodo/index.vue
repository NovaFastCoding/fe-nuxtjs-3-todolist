<template>
	<div class="listTodo">
		<div class="noTodo">
			<img :src="pathImages.noTodo.src" :alt="pathImages.noTodo.alt" />
			<h3>{{ noTodoText }}</h3>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PathImages, Text, Numbers, WarningToastOptions, ToastOptions, SuccessfulMessages } from '../../constants';

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
});
</script>

<style>
@import './index.scss';
</style>
