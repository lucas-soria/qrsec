import { backUrls } from './Urls'

var bearer = () => 'Bearer ' + localStorage.getItem("access_token")

export const logIn = async( email, password ) => {

    const response = await fetch(backUrls.base + backUrls.login, {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify({
            'username': email,
            'password': password
        }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            }
    }).then((response) => response.json()).catch((error) => console.log(error))

    return response

}

export const createInvite = async( invite ) => {

    const response = await fetch(backUrls.base + backUrls.invite, {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(invite),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': bearer()
            }
    }).then((response) => response.json())

    return response

}

export const getInvite = async ( id ) => {

    const response = await fetch(backUrls.base + backUrls.invite + id, {
        mode: 'cors',
        method: 'GET',
        headers: {
            'Content-Type': "application/json",
            'Accept': 'application/json',
            'Origin': process.env.REACT_APP_WHOLE_FRONTEND_BASE,
            'Referer': process.env.REACT_APP_WHOLE_FRONTEND_BASE,
            'Host': process.env.REACT_APP_WHOLE_BACKEND_BASE
        },
    }).then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            return null
        }
    }).catch((error) => console.error(error))

    return response

}

export const getGuests = async() => {

    const response = await fetch(backUrls.base + "all/" + backUrls.guest, {
        mode: 'cors',
        method: 'GET',
        headers: {
            'Content-Type': "application/json",
            'Accept': 'application/json',
            'Authorization': bearer()
        },    
    }).then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            return []
        }
    })

    return response

}

export const getMyGuests = async() => {

    const response = await fetch(backUrls.base + backUrls.guest, {
        mode: 'cors',
        method: 'GET',
        headers: {
            'Content-Type': "application/json",
            'Accept': 'application/json',
            'Authorization': bearer()
        },    
    }).then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            return []
        }
    })

    return response

}

export const createGuest = async( guest ) => {

    const response = await fetch(backUrls.base + backUrls.guest, {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(guest),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': bearer()
            }
    }).then((response) => response.json())

    return response

}
