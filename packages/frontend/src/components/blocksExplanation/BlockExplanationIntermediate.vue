<template>
	<div class="block-explanation-intermediate-wrapper">
		<div v-for="block in blocks" :key="block">
			<block-explanation-column :block="block"></block-explanation-column>
		</div>
	</div>
</template>

<script>
import BlockExplanationColumn from './BlockExplanationColumn.vue'
export default {
	props: ['blocks'],
	components: { BlockExplanationColumn },
}
</script>

<style scoped>
.block-explanation-intermediate-wrapper {
	display: flex;
	margin: 0.3rem 0 1rem 0;
	border: 1px solid #424242;
	border-radius: 12px;
	padding: 1rem;
}
</style>
