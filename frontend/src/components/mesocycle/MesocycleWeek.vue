<template>
	<div class="week-wrapper">
		<div v-for="(bloqs, day) in week" :key="day">
			<mesocycle-day :bloqs="bloqs" :day="day"></mesocycle-day>
		</div>
	</div>
</template>

<script>
import MesocycleDay from './MesocycleDay.vue';
export default {
	props: ['week'],
	components: { MesocycleDay },
};
</script>

<style scoped>
.week-wrapper {
	display: flex;
	margin: 1rem 0;
	border: 1px solid #424242;
	border-radius: 12px;
	padding: 1rem;
}
</style>
