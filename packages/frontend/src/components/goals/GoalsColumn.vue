<template>
	<ul>
		<span class="card">
			{{ block.blockName }}
		</span>
		<div v-for="goal in block.blockGoals" :key="goal">
			<li class="card">{{ goal }}</li>
		</div>
	</ul>
</template>

<script>
export default {
	props: ['block'],
}
</script>

<style scoped>
ul {
	list-style: none;
	margin: 12px;
	padding: 0;
}

ul span {
	font-weight: bold;
}

.card {
	margin: 0.4rem auto;
	padding: 0.4rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	max-width: 25rem;
}
</style>
