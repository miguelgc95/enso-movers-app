<template>
	<base-card>
		<h2>Objetivos</h2>
		<goals-intermediate :goals="goals"></goals-intermediate>
	</base-card>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue'
import GoalsIntermediate from './GoalsIntermediate.vue'
export default {
	components: { BaseCard, GoalsIntermediate },
	computed: {
		goals() {
			return this.$store.getters['userModule/goals']
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
