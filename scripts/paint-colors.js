import { getPaintColors, setPaintColor } from "./database.js"

const colors = getPaintColors()

export const Colors = () => {
    let colorHtml = "<ul>"
    const colorArr = colors.map(color => {
        return `<li id=color--${color.id}><input type="radio" name="color--${color.id}" value="${color.color}"/> ${color.color}</li>`
    })
    colorHtml += colorArr.join("")
    colorHtml += "</ul>"

    return colorHtml
}


//add change eventListener to display User's choice.
// 🟡注意： e.target.name❗️ "使用 .name"❗️ （因为是给radio button 加eventlistener，不是给html element 加！！！）
// 🟡注意： line 22 如果写成  if (e.target.name === `color`){window alert......}, 会alert 4 次！👀👀👀👀
/*
document.addEventListener("change", e => {
    for (const color of colors) {
        if (e.target.name === `color--${color.id}`) {
            window.alert(`You selected ${e.target.value} paint color.`)
        }
    }
})
*/

//add change eventListener to set choice value (state variable) in the database.
document.addEventListener("change", e => {
    for (const color of colors) {
        if (e.target.name === `color--${color.id}`) {
            setPaintColor(color.id) //不能写成 setPaintColor(`${color.id}`) 因为这样id 就不再是数字了，而变成了string。
        }
    }
})