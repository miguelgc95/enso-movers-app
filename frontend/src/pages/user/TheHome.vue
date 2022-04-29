<template>
	<base-dialog :show="!!error" title="An error occurred!" @close="handleError">
		<p>{{ error }}</p>
	</base-dialog>
	<div>
		<base-spinner v-if="isLoading"></base-spinner>
		<div v-else>
			<the-mesocycle></the-mesocycle>
			<block-explanation></block-explanation>
			<the-goals>Objetivos</the-goals>
		</div>
	</div>
</template>

<script>
import TheMesocycle from '../../components/mesocycle/TheMesocycle.vue'
import BlockExplanation from '../../components/blocksExplanation/BlockExplanation.vue'
import TheGoals from '@/components/goals/TheGoals.vue'
export default {
	components: { TheMesocycle, BlockExplanation, TheGoals },
	data() {
		return {
			isLoading: false,
			error: null,
		}
	},
	created() {
		this.loadUserInfo()
	},
	methods: {
		async loadUserInfo() {
			this.isLoading = true
			try {
				await this.$store.dispatch('userModule/loadUserInfo')
			} catch (error) {
				this.error = error.message || 'Something went wrong!'
			}
			this.isLoading = false
		},
		handleError() {
			this.error = null
		},
	},
}
</script>
