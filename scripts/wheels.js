import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

export const Wheels = () => {
    let wheelHtml = "<ul>"

    const wheelArr = wheels.map(wheel => {
        return `<li><input type="radio" name=wheel--${wheel.id} value=${wheel.id}>${wheel.name}</li>`
    })
    wheelHtml += wheelArr.join("")
    wheelHtml += "</ul>"

    return wheelHtml
}

// add change eventListener to display User's choice.
/*
document.addEventListener("change", e => {
    for (const wheel of wheels) {
        if (e.target.name === `wheel--${wheel.id}`) {
            window.alert(`You selected ${wheel.name} wheels.`)
        }
    }
})
*/

//add change eventListener to set choice value (state variable) in the database.
document.addEventListener("change", e => {
    for (const wheel of wheels) {
        if (e.target.name === `wheel--${wheel.id}`) {
            setWheel(wheel.id) //不能写成 setWheel(`${wheel.id}`) 因为这样id 就不再是数字了，而变成了string。
        }
    }
})