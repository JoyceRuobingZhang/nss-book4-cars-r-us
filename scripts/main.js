import { carsInfo, } from "./theCars.js"
import { addCustomOrder } from "./database.js"

const mainContainer = document.querySelector("#container")
export const renderHtml = () => {
    mainContainer.innerHTML = carsInfo()
}
renderHtml()


/* creat custom order
ð¡â  user ç¹å» create custom order button çæ¶åï¼
ð¡â¡ ä¼ invoke addCustomOrder()ï¼ ä»èæ¹å database.js éç state variable ä»¥å state arrayï¼æåéæ° renderHtml().
*/
document.addEventListener("click", e => {
    if (e.target.id === "order-button") {
        addCustomOrder()
    }
})