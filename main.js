const getResidentsBtn = document.querySelector("#get-residents")

const buttonClicked = () => console.log("The 'get residents' button has been clicked")

const createNameElement = (residentObj) => {
    const h2 = document.createElement("h2")
    const name = document.createTextNode(`${residentObj.data.name}`.toLowerCase())
    h2.appendChild(name)
    const element = document.getElementById("name-area")
    element.appendChild(h2)
}

const residentURL = (residentURL) => {
    axios.get(`${residentURL}`).then(createNameElement)
}

const getResidentCallback = (searchResult) => {
    let residents = searchResult.data.results[0].residents
    residents.forEach(residentURL)
}

const getResidents = () => axios.get("https://swapi.dev/api/planets/?search=alderaan").then(getResidentCallback).catch((err) => console.log(err))
getResidentsBtn.addEventListener('click', getResidents)