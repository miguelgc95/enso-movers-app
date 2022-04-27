import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
	namespaced: true,
	state() {
		return {
			name: 'Miguel García',
			birdth: '25-05-1995',
			mail: 'test@gmail.com',
			photo: 'awsedgf',
			ID: 'sdfhb',
			mesocycle: {
				startingDate: 'lunes 11 abril',
				weeks: [
					{
						monday: [
							'Handstand',
							'Movilidad isquisural',
							'movilidad de cadera',
							'tren superior',
						],
						tuesday: ['Handstand', 'tren inferior', 'Movilidad toracica y GH'],
						wednesday: ['Handstand'],
						thursday: ['Handstand', 'tren inferior', 'Movilidad de cadera'],
						friday: [
							'Handstand',
							'Movilidad isquisural',
							'movilidad de torácica y GH',
							'tren superior',
						],
						saturday: ['Handstand'],
						sunday: ['Handstand'],
					},
					{
						monday: [
							'Handstand',
							'Movilidad isquisural',
							'movilidad de cadera',
							'tren superior',
						],
						tuesday: ['Handstand', 'tren inferior', 'Movilidad toracica y GH'],
						wednesday: ['Handstand'],
						thursday: ['Handstand', 'tren inferior', 'Movilidad de cadera'],
						friday: [
							'Handstand',
							'Movilidad isquisural',
							'movilidad de torácica y GH',
							'tren superior',
						],
						saturday: ['Handstand'],
						sunday: ['Handstand'],
					},
				],
			},
			blockExplanation: [
				{
					blockName: 'Tren superior',
					sets: [
						{
							numberOfSets: '6',
							excersices: ['A.1 - 2r Muscle Up en anillas'],
						},
						{
							numberOfSets: '3',
							excersices: [
								'B.1 - 5r HeSPU en pared',
								'B.2 - 8-10r Dominadas ¿?kg',
							],
						},
					],
				},
				{
					blockName: 'Tren inferior',
					sets: [
						{
							numberOfSets: '4',
							excersices: ['A - 8r Back squat (32X1) 50kg'],
						},
						{
							numberOfSets: '8',
							excersices: ['B - 2r Pistol squat'],
						},
						{
							numberOfSets: '2',
							excersices: ['C - 10r Natural leg extensions'],
						},
					],
				},
				{
					blockName: 'Handstand',
					sets: [
						{
							numberOfSets: '2',
							excersices: [
								'A.1 - Warm up de muñecas',
								'B - 30s Handstand Chest to wall',
								'B - 30s Handstand Chest to wall',
							],
						},
						{
							numberOfSets: '8',
							excersices: [
								'C - 35s Equilibrio desde tijera en HS Chest to wall',
							],
						},
					],
				},
			],
			goals: [
				{
					blockName: 'Tren superior',
					blockGoals: '5x5r Muscle up. 10r HeSPU en pared',
				},
				{
					blockName: 'Tren inferior',
					blockGoals:
						'8r Back squat (32X1) 1BW (70-75kg). 5r Pistol squat. 10r Natural leg extensions a rango completo. Sissy squats a rango completo',
				},
				{
					blockName: 'Handstand',
					blockGoals:
						'1min de HS en Straight y en Straddle. 30s Tuck HS. Consolidar transiciones y entradas.',
				},
			],
		};
	},
	mutations,
	actions,
	getters,
};
