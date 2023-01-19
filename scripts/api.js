export const indexCrew = () => {
    return fetch(`http://localhost:8000/crews`)
}

export const createCrew = (data) => {
    return fetch(`http://localhost:8000/crews`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showCrew = (id) => {
    return fetch(`http://localhost:8000/crews/${id}`)
}