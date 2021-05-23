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
    customOrder: [
        {}
    ],
    orderBuilder: {

    }
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