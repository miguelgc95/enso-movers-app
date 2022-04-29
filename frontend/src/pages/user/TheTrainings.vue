<template>
	<base-card>
		<h2>Diario de entrenamientos</h2>
		<new-training-form></new-training-form>
		<base-card>
			<h3>Entrenamientos anteriores</h3>
			<div class="controls">
				<base-button mode="outline" @click="listMode">Lista</base-button>
				<base-button mode="outline" @click="calendarMode">Calendario</base-button>
			</div>
		</base-card>
	</base-card>
</template>

<script>
import NewTrainingForm from '@/components/NewTrainingForm.vue'
export default {
	components: { NewTrainingForm },
	methods: {
		listMode() {
			console.log('lista')
		},
		calendarMode() {
			console.log('calendario')
		},
	},
}
</script>
