import { getCustomOrders, getPaintColors, getTechnologies, getWheels } from "./database.js"

const buildOrderPriceHtml = (order) => { //!!! have to pass order as an parameter
    const colors = getPaintColors()
    const technologies = getTechnologies()
    const wheels = getWheels()

    // find() find the array item which passes the condition.
    const orderColor = colors.find(color => {
        return color.id === order.colorId
    })
    const colorPrice = orderColor.price

    const orderTech = technologies.find(tech => {
        return tech.id === order.technologyId
    })
    const techPrice = orderTech.price

    const orderWheel = wheels.find(wheel => {
        return wheel.id === order.wheelId
    })
    const wheelPrice = orderWheel.price

    const totalPrice = colorPrice + techPrice + wheelPrice

    return `<li>Order #${order.id} costs $${totalPrice.toFixed(2)}.</li>`
}



export const Orders = () => {

    const orders = getCustomOrders()
        /* ❗️🟡❗️🟡❗️
        这一步一定要放在 Orders function 内部，因为先有user 点击 create order button，才能激活database里的 addCustomOrder（），
        然后才能有 getCustomOrders()。所以不能提前就 getCustomOrders()，提前的 customOrders[] 是空的。*/

    let orderHtml = "<ul>"


    /*  🟡 to diaplay to order html without price:
    const listedItemArr = orders.map(order => {
        return `<li>Order #${order.id} was placed on ${order.timestamp}.</li>`
    })
    orderHtml += listedItemArr.join("")
    */

    //  🟡 to diaplay to order html with price:
    const listedItemArr = orders.map(order => buildOrderPriceHtml(order))
        // 或写成： const listedItemArr = orders.map(❗️buildOrderPriceHtml❗️)

    orderHtml += listedItemArr.join("")

    orderHtml += "</ul>"
    return orderHtml
}