const indexCrewContainer = document.querySelector('#index-crew-container')
const messageContainer = document.querySelector('#message-container')
const showCrewContainer = document.querySelector('#show-crew-container')

export const onIndexCrewSuccess = (crews) => {
    crews.forEach(crew => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${crew.name}</h3>
            <button data-id="${crew._id}" >Show Crew</button>
        `
        indexCrewContainer.appendChild(div)
    })
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've got an error! :(</h3>
        <p>${error}</p>
    `
}

export const onCreateCrewSuccess = () => {
    messageContainer.innerText = 'You have created a crew member!'
}

export const onShowCrewSuccess = (crew) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${crew.name}</h3>
        <p>${crew.station}</p>
    `
    showCrewContainer.appendChild(div)
}