<template>
	<base-card>
		<h2>Detalle de los bloques</h2>
		<block-explanation-intermediate :blocks="blockExplanation"></block-explanation-intermediate>
	</base-card>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue'
import BlockExplanationIntermediate from './BlockExplanationIntermediate.vue'
export default {
	components: { BaseCard, BlockExplanationIntermediate },
	computed: {
		blockExplanation() {
			return this.$store.getters['userModule/blockExplanation']
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
