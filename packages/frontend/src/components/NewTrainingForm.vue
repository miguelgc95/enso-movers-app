<template>
	<base-card>
		<h2>Registrar nuevo entrenamiento</h2>
		<form @submit.prevent="submitForm">
			<div class="form-control" :class="{ invalid: !date.isValid }">
				<label for="date">Fecha</label>
				<input type="date" id="date" v-model.trim="date.val" @blur="clearValidity('date')" />
				<p v-if="!date.isValid">date must not be empty.</p>
			</div>
			<div class="form-control" :class="{ invalid: !description.isValid }">
				<label for="description">Descripción - Estado de ánimo/energía - Consideraciones generales</label>
				<textarea id="description" rows="5" v-model.trim="description.val" @blur="clearValidity('description')"></textarea>
				<p v-if="!description.isValid">Description must not be empty.</p>
			</div>

			<div class="form-control">
				<label for="select">block</label>
				<select id="select" v-model="selected">
					<option value="Tren superior">Tren superior</option>
					<option value="Tren inferior">Tren inferior</option>
					<option value="Handstand">Handstand</option>
					<option value="Movilidad isquisural">Movilidad isquisural</option>
					<option value="Movilidad de cadera">Movilidad de cadera</option>
					<option value="Movilidad torácica">Movilidad torácica</option>
				</select>
			</div>
			<p v-if="!formIsValid">Please fix the above errors and submit again.</p>
			<base-button mode="outline" @click="addBlock">Añadir bloque de entrenamiento</base-button>
			<base-button @click="submitForm">Register</base-button>
		</form>
	</base-card>
</template>

<script>
export default {
	emits: ['save-data'],
	data() {
		return {
			selected: 'Tren superior',
			date: {
				val: new Date().toISOString().substr(0, 10),
				isValid: true,
			},
			description: {
				val: '',
				isValid: true,
			},
			training: {
				val: [],
				isValid: true,
			},
			formIsValid: true,
		}
	},
	methods: {
		clearValidity(input) {
			this[input].isValid = true
		},
		validateForm() {
			this.formIsValid = true
			if (this.date.val === '') {
				this.date.isValid = false
				this.formIsValid = false
			}
			if (this.lastName.val === '') {
				this.lastName.isValid = false
				this.formIsValid = false
			}
			if (this.description.val === '') {
				this.description.isValid = false
				this.formIsValid = false
			}
		},
		addBlock() {
			console.log('addblock')
		},
		submitForm() {
			this.validateForm()

			if (!this.formIsValid) {
				return
			}

			const formData = {
				first: this.firstName.val,
				last: this.lastName.val,
				desc: this.description.val,
				rate: this.rate.val,
				areas: this.areas.val,
			}

			this.$emit('save-data', formData)
		},
	},
}
</script>

<style scoped>
.form-control {
	margin: 0.5rem 0;
}

label {
	font-weight: bold;
	display: block;
	margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
	font-weight: normal;
	display: inline;
	margin: 0 0 0 0.5rem;
}

input,
textarea {
	display: block;
	width: 100%;
	border: 1px solid #ccc;
	font: inherit;
}

input:focus,
textarea:focus {
	background-color: #f0e6fd;
	outline: none;
	border-color: #3d008d;
}

h3 {
	margin: 0.5rem 0;
	font-size: 1rem;
}

.invalid label {
	color: red;
}

.invalid input,
.invalid textarea {
	border: 1px solid red;
}
</style>
