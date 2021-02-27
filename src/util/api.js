export const getEmployees = async () => {
    const data = await fetch(
        'https://randomuser.me/api/?results=200&nat=us')
    const JSON = await data.json()
    return JSON.results;
}