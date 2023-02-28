const destructuringResult = (prop) => {
    const { date, value } = prop;
    return { date, value }
}

export const requestInflation = async () => {
    const result = await fetch('https://brapi.dev/api/v2/inflation?country=brazil')
        .catch(err => console.log(err))
        .then(response => response.json())

    const data = await result.inflation.map(destructuringResult)

    return data;
}