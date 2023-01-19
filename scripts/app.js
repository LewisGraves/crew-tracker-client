import { indexCrew, createCrew, showCrew, updateCrew, deleteCrew } from './api.js'
import {
	onIndexCrewSuccess,
	onFailure,
	onCreateCrewSuccess,
	onShowCrewSuccess,
	onUpdateCrewSuccess,
} from './ui.js'

const createCrewForm = document.querySelector('#create-crew-form')
const indexCrewContainer = document.querySelector('#index-crew-container')
const showCrewContainer = document.querySelector('#show-crew-container')

indexCrew()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexCrewSuccess(res.crews)
    })
    .catch(onFailure)


createCrewForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const crewData = {
			crew: {
				name: event.target['name'].value,
				station: event.target['station'].value,
			},
		}

    // console.log(crewData)
    createCrew(crewData)
			.then(onCreateCrewSuccess)
			.catch(onFailure)
})

indexCrewContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    // console.log(id)
	if (!id) return

    showCrew(id)
			.then((res) => res.json())
			.then((res) => onShowCrewSuccess(res.crew))
			.catch(onFailure)
})

showCrewContainer.addEventListener('submit', (event) => {
	event.preventDefault()

	const id = event.target.getAttribute('data-id')
	if (!id) return

	const crewData = {
		crew: {
			name: event.target['name'].value,
			station: event.target['station'].value,
		},
	}

	updateCrew(crewData, id)
		// this function (onUpdateCrewSuccess) does not need anything to run. NO params
		.then(onUpdateCrewSuccess)
		.catch(onFailure)
})

showCrewContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	deleteCrew(id)
		.then(onDeleteCrewSuccess)
		.catch(onFailure)
})