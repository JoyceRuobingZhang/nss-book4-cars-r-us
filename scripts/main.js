import { carsInfo } from "./theCars.js"

const mainContainer = document.querySelector("#container")
const renderHtml = () => {
    mainContainer.innerHTML = carsInfo()
}
renderHtml()