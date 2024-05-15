const headers = new Headers()
headers.append('Content-Type', 'application/json')
headers.append('x-api-key', `${process.env.API_CAT_KEY}`)

export const getBreeds = async() => {
    const response = await fetch(
        `${process.env.API_CAT_URL}/breeds`,
        {
            headers: headers
        })
    const result = await response.json()

    return result
}
