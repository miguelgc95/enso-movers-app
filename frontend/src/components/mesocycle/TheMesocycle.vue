<template>
	<div>
		<base-dialog :show="!!error" title="An error occurred!" @close="handleError">
			<p>{{ error }}</p>
		</base-dialog>
		<base-card class="mesocycle-wrapper">
			<h2>Mesociclo</h2>
			<div v-for="(week, index) in mesocycle.weeks" :key="week">
				<span>Week {{ index + 1 }}</span>
				<mesocycle-week :week="week"></mesocycle-week>
			</div>
		</base-card>
	</div>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue';
import MesocycleWeek from './MesocycleWeek.vue';
export default {
	components: { MesocycleWeek, BaseCard },
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
}

span {
	margin: 10px;
}
</style>
