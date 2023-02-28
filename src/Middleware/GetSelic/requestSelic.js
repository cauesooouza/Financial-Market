const destructuringResult = (prop) => {
    const { date, value } = prop;
    return { date, value }
}
export const requestSelic = async () => {
    const result = await fetch('https://brapi.dev/api/v2/prime-rate?country=brazil')
        .catch(err => console.log(err))
        .then(response => response.json())
        .then(data => data['prime-rate'])

    const data = result.map(destructuringResult)

    return data;
}