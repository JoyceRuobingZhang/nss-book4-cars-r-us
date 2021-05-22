import { getTechnologies } from "./database.js"

const technologies = getTechnologies()

export const Technologies = () => {
    let technologyHtml = "<ul>"

    const technologyArr = technologies.map(technology => {
        return `<li><input type="radio" name="technology" value=${technology.id}>${technology.name}</li>`
    })

    technologyHtml += technologyArr.join("")
    technologyHtml += "</ul>"

    return technologyHtml
}