<template>
	<div class="filters">
		<div class="status">
			<p class="filterBy">Status:</p>
			<div class="currentStatus">
				<p>All</p>
				<div class="iconDropdown">
					<!-- <oh-vue-icon
						name="md-arrowdropdown-outlined"
						class="mdArrowdropdownOutlined"
						@click="handleOpenOtherStatuses"
					></oh-vue-icon> -->
				</div>
			</div>
			<!-- <div class="otherStatuses" v-if="isOpenOtherStatuses" v-click-outside="handleClickOutsideOtherStatuses">
				<div
					class="otherStatus"
					v-for="(status, index) in otherStatuses"
					:key="index"
					@click="handleChangeStatus(status)"
				>
					<p> {{ $t(status) }}</p>
				</div>
			</div> -->
		</div>
		<div class="deadline">
			<!-- <p class="filterBy">{{ $t(textInTag.deadline) + symbol.colon }}</p> -->
			<p class="filterBy">Deadline:</p>
			<input type="date" />
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'filters',
});
</script>

<style scoped>
@import './index.scss';
</style>
