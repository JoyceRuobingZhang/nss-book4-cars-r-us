import { carsInfo, } from "./theCars.js"
import { addCustomOrder } from "./database.js"

const mainContainer = document.querySelector("#container")
export const renderHtml = () => {
    mainContainer.innerHTML = carsInfo()
}
renderHtml()


/* creat custom order
🟡① user 点击 create custom order button 的时候；
🟡② 会 invoke addCustomOrder()， 从而改变 database.js 里的 state variable 以及 state array；最后重新 renderHtml().
*/
document.addEventListener("click", e => {
    if (e.target.id === "order-button") {
        addCustomOrder()
    }
})