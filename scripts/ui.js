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
    messageContainer.innerText = 'You have created a crew!! :)'
}

export const onShowCrewSuccess = (crew) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${crew.name}</h3>
        <p>${crew.station}</p>

        <form data-id="${crew._id}">
            <input type="text" name="name" value="${crew.name}" />
            <input type="text" name="station" value="${crew.station}" />
            <input type="submit" value="Update Crew" />
        </form>

        <button data-id="${crew._id}">Delete Crew</button>
    `
    showCrewContainer.appendChild(div)
}

export const onUpdateCrewSuccess = () => {
    messageContainer.innerText = 'Update was successful :)'
}

export const onDeleteCrewSuccess = () => {
    messageContainer.innerText = 'Delete was successful!'
}