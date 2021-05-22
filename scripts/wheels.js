import { getWheels } from "./database.js"

const wheels = getWheels()

export const Wheels = () => {
    let wheelHtml = "<ul>"

    const wheelArr = wheels.map(wheel => {
        return `<li><input type="radio" name="wheel" value=${wheel.id}>${wheel.name}</li>`
    })
    wheelHtml += wheelArr.join("")
    wheelHtml += "</ul>"

    return wheelHtml
}