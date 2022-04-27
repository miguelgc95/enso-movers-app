<template>
	<div class="mesocycle-wrapper">
		<div v-for="(week, index) in mesocycle.weeks" :key="week">
			<span>Week {{ index + 1 }}</span>
			<mesocycle-week :week="week"></mesocycle-week>
		</div>
	</div>
</template>

<script>
import MesocycleWeek from './MesocycleWeek.vue';
export default {
	components: { MesocycleWeek },
	computed: {
		mesocycle() {
			return this.$store.getters['userModule/mesocycle'];
		},
	},
};
</script>

<style scoped>
.mesocycle-wrapper {
	margin: 15px;
	padding: 15px;
	/* border: 1px solid black; */
}

span {
	margin: 10px;
}
</style>
