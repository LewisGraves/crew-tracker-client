import { indexCrew, createCrew, showCrew } from './api.js'
import { onIndexCrewSuccess, onFailure, onCreateCrewSuccess, onShowCrewSuccess } from './ui.js'

const createCrewForm = document.querySelector('#create-crew-form')
const indexCrewContainer = document.querySelector('#index-crew-container')

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
    createCrew(crewData)
			.then(onCreateCrewSuccess)
			.catch(onFailure)
})

indexCrewContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    showCrew(id)
			.then((res) => res.json())
			.then((res) => onShowCrewSuccess(res.crew))
			.catch(onFailure)
})