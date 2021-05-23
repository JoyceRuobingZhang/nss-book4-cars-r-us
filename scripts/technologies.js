import { getTechnologies, setTechnology } from "./database.js"

const technologies = getTechnologies()

export const Technologies = () => {
    let technologyHtml = "<ul>"

    const technologyArr = technologies.map(technology => {
        return `<li><input type="radio" name=technology--${technology.id} value=${technology.id}>${technology.name}</li>`
    })

    technologyHtml += technologyArr.join("")
    technologyHtml += "</ul>"

    return technologyHtml
}

// add change eventListener to display User's choice.
/*
document.addEventListener("change", e => {
    for (const technology of technologies) {
        if (e.target.name === `technology--${technology.id}`) {
            window.alert(`You selected ${technology.name} technology.`)
        }
    }
})
*/

//add change eventListener to set choice value (state variable) in the database.
document.addEventListener("change", e => {
    for (const technology of technologies) {
        if (e.target.name === `technology--${technology.id}`) {
            setTechnology(technology.id) //不能写成 setTechnology(`${technology.id}`) 因为这样id 就不再是数字了，而变成了string。
        }
    }
})