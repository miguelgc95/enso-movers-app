<template>
	<ul>
		<span class="card">
			{{ day.charAt(0).toUpperCase() + day.slice(1) }}
		</span>
		<li class="card" v-for="bloq in bloqs" :key="bloq">{{ bloq }}</li>
	</ul>
</template>

<script>
export default {
	props: ['bloqs', 'day'],
};
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
