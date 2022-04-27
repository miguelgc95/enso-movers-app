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
	margin: 10px;
	display: flex;
	border: 1px solid black;
}
</style>
