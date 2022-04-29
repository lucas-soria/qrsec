const base_url = "http://localhost:8080/api"
const invite_url = base_url + "/invite"
const guest_url = base_url + "/guest"


export const createInvite = async( invite ) =>{

    const response = await fetch(invite_url, {
        method: 'POST',
        body: JSON.stringify(invite),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
    }).then((response) => response.json())

    return response
}


export const getInvite = async( id ) => {

    const response = await fetch(invite_url + id, {
        method: 'GET',
        headers: {
            'Content-Type': "application/json",
            'Accept': 'application/json'
        },    
    }).then((response) => response.json())

    return response
}

export const getGuests = async() => {

    const response = await fetch(guest_url, {
        method: 'GET',
        headers: {
            'Content-Type': "application/json",
            'Accept': 'application/json'
        },    
    }).then((response) => response.json())

    return response
}