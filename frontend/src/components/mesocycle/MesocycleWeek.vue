<template>
	<div class="week-wrapper">
		<div v-for="(blocks, day) in week" :key="day">
			<mesocycle-day :blocks="blocks" :day="day"></mesocycle-day>
		</div>
	</div>
</template>

<script>
import MesocycleDay from './MesocycleDay.vue'
export default {
	props: ['week'],
	components: { MesocycleDay },
}
</script>

<style scoped>
.week-wrapper {
	display: flex;
	margin: 0.3rem 0 1rem 0;
	border: 1px solid #424242;
	border-radius: 12px;
	padding: 1rem;
}
</style>
