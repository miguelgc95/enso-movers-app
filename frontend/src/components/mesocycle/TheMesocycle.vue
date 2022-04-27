<template>
	<div>
		<base-dialog :show="!!error" title="An error occurred!" @close="handleError">
			<p>{{ error }}</p>
		</base-dialog>
		<base-card class="mesocycle-wrapper">
			<h2>Mesociclo</h2>
			<div v-if="isLoading">
				<base-spinner></base-spinner>
			</div>
			<section v-else>
				<div v-for="(week, index) in mesocycle.weeks" :key="week">
					<span>Week {{ index + 1 }}</span>
					<mesocycle-week :week="week"></mesocycle-week>
				</div>
			</section>
		</base-card>
	</div>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue';
import MesocycleWeek from './MesocycleWeek.vue';
export default {
	components: { MesocycleWeek, BaseCard },
	data() {
		return {
			isLoading: false,
			error: null,
		};
	},
	computed: {
		mesocycle() {
			return this.$store.getters['userModule/mesocycle'];
		},
	},
	created() {
		this.loadUserInfo();
	},
	methods: {
		async loadUserInfo() {
			this.isLoading = true;
			try {
				console.log('voy a llamar a la api');
				await this.$store.dispatch('userModule/loadUserInfo');
			} catch (error) {
				console.log('he entrao en catch');
				this.error = error.message || 'Something went wrong!';
			}
			this.isLoading = false;
		},
		handleError() {
			this.error = null;
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
