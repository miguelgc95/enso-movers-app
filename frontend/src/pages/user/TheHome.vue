<template>
	<section>Mesociclo</section>
	{{ mesocycle }}
	<section>Detalle de los bloques</section>
	<section>Objetivos</section>
</template>

<script>
export default {
	computed: {
		mesocycle() {
			return this.$store.getters['userModule/mesocycle'];
		},
	},
};
</script>
