<template>
	<base-card>
		<h2>Mesociclo - Programación - Plan</h2>
		<div v-for="(week, index) in mesocycle.weeks" :key="week">
			<span>Week {{ index + 1 }}</span>
			<mesocycle-week :week="week"></mesocycle-week>
		</div>
	</base-card>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue'
import MesocycleWeek from './MesocycleWeek.vue'
export default {
	components: { MesocycleWeek, BaseCard },
	computed: {
		mesocycle() {
			return this.$store.getters['userModule/mesocycle']
		},
	},
}
</script>

<style scoped>
span {
	margin: 10px;
	padding-bottom: 0px;
}
</style>
