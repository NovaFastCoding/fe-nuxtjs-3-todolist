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
					<div class="infoTodo">
						<div class="iconCheck">
							<RiCheckLine class="RiCheckLine" />
						</div>
						<div class="valuesTodo">
							<h3 :title="formatOrdinalNumbers(index) + symbols.dot + ' ' + todo.nameTodo">
								{{ formatOrdinalNumbers(index) + symbols.dot + ' ' + todo.nameTodo }}
							</h3>
							<p class="deadlineTodo">
								{{ textInTag.deadline + symbols.colon }} <span>{{ ' ' + todo.deadlineTodo }}</span>
							</p>
						</div>
					</div>
					<div class="actions">
						<RiDeleteBinLine name="ri-delete-bin-line" class="riDeleteBinLine" />
					</div>
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
import { RiCheckLine, RiDeleteBinLine } from 'vue-remix-icons';

export default defineComponent({
	name: 'listTodo',
	components: {
		RiCheckLine,
		RiDeleteBinLine,
	},
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
	methods: {
		formatOrdinalNumbers(index: number) {
			return index + 1;
		},
	},
});
</script>

<style>
@import './index.scss';
</style>
