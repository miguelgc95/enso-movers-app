<template>
	<div class="goals-intermediate-wrapper">
		<div v-for="block in goals" :key="block">
			<goals-column :block="block"></goals-column>
		</div>
	</div>
</template>

<script>
import GoalsColumn from './GoalsColumn.vue'
export default {
	props: ['goals'],
	components: { GoalsColumn },
}
</script>

<style scoped>
.goals-intermediate-wrapper {
	display: flex;
	margin: 0.3rem 0 1rem 0;
	border: 1px solid #424242;
	border-radius: 12px;
	padding: 1rem;
}
</style>
