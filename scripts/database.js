import { renderHtml } from "./main.js"


const database = {
    paintColors: [{
            id: 1,
            color: "Silver",
            price: 3000
        },
        {
            id: 2,
            color: "Midnight Blue",
            price: 3500
        },
        {
            id: 3,
            color: "Firebrick Red",
            price: 3700
        },
        {
            id: 4,
            color: "Spring Green",
            price: 3400
        }
    ],
    technologies: [{
            id: 1,
            name: "Basic Package (basic sound system)",
            price: 800
        },
        {
            id: 2,
            name: "Navigation Package (includes integrated navigation controls)",
            price: 900
        },
        {
            id: 3,
            name: "Visibility Package (includes side and reat cameras)",
            price: 700
        },
        {
            id: 4,
            name: "Ultra Package (includes navigation and visibility packages) ",
            price: 1500
        }
    ],
    wheels: [{
            id: 1,
            name: "17-inch Pair Radial",
            price: 800
        },
        {
            id: 2,
            name: "17-inch Pair Radial Black",
            price: 900
        },
        {
            id: 3,
            name: "18-inch Pair Spoke Silver",
            price: 1100
        },
        {
            id: 4,
            name: "18-inch Pair Spoke Black",
            price: 1100
        }
    ],
    customOrders: [],
    orderBuilder: {}
}

export const setPaintColor = (id) => {
    database.orderBuilder.colorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}


export const getPaintColors = () => {
    return database.paintColors.map(color => ({...color }))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology }))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel }))
}
export const getCustomOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder }))
}


//add state object "orderBuilder{}" to the state array "customOrders[]"
export const addCustomOrder = () => {
    if (database.orderBuilder.colorId && database.orderBuilder.technologyId && database.orderBuilder.wheelId) {
        database.orderBuilder.id = database.customOrders.length + 1
        database.orderBuilder.timestamp = Date.now()
        database.customOrders.push(database.orderBuilder)
            /*   ❗️🟡❗️🟡❗️下面两步很重要！
            首先：要reset orderBuilder state object; 
            然后：要重新 renderHtml() 才能reload order的html.    */
        database.orderBuilder = {}
        renderHtml()
    }
}


console.log(database.paintColors[0].id)