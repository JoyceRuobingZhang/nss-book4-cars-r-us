import { getPaintColors } from "./database.js"

const colors = getPaintColors()

export const Colors = () => {
    let colorHtml = "<ul>"
    const colorArr = colors.map(color => {
        return `<li><input type="radio" name="color" value="${color.id}"> ${color.color}</li>`
    })
    colorHtml += colorArr.join("")
    colorHtml += "</ul>"

    return colorHtml
}