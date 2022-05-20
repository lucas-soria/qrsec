import { backUrls } from './Urls'

export const createInvite = async( invite ) =>{

    const response = await fetch(backUrls.invite, {
        mode: 'cors',
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

    const response = await fetch(backUrls.invite + id, {
        mode: 'cors',
        method: 'GET',
        headers: {
            'Content-Type': "application/json",
            'Accept': 'application/json'
        },    
    }).then((response) => response.json())

    return response
}

export const getGuests = async() => {

    const response = await fetch(backUrls.guest, {
        mode: 'cors',
        method: 'GET',
        headers: {
            'Content-Type': "application/json",
            'Accept': 'application/json'
        },    
    }).then((response) => response.json())

    return response
}

export const createGuest = async( guest ) =>{

    const response = await fetch(backUrls.guest, {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(guest),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
    }).then((response) => response.json())

    return response
}
