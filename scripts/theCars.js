import { Colors } from "./paint-colors.js"
import { Technologies } from "./technologies.js"
import { Wheels } from "./wheels.js"

export const carsInfo = () => {
    return `
    <h1> Cars 'R Us</h1>

    <article class="cars_info">
        <section class="paintColors option">
            <h2>Paint-Colors</h2>
            ${Colors()}
        </section>
        <section class="technologies option">
            <h2>Technologies</h2>
            ${Technologies()}
        </section>
        <section class="wheels option">
            <h2>Wheels</h2>
            ${Wheels()}
        </section>
    </article>

    <article class="cusdom_order">
        <section class="orders">
            <h2>Custom Car Orders</h2>
        </section>
    </article>
    `
}