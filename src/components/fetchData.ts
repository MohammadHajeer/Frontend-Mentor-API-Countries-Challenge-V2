export const fetchCountries = async (region: boolean, name: string) => {
    let data = await ((await fetch("/data.json")).json())

    if (region) {
        data = data.filter((country: { region: string }) => country.region === name)
    } else {
        data = data.filter((country: { name: string }) => country.name.toLowerCase().startsWith(name))
    }
    return data;
}

export const fetchCountry = async (name: string) => {
    let data = await ((await fetch("/data.json")).json())

    data = data.filter((country: { name: string }) => country.name === name)

    return data;
}