import { MercedElement } from "mercedui";

class MyHeader extends MercedElement {
    constructor() {
        super(
            (state, props) => { // Argument 1: The Build Function
                return `<h1>This is the Header Component</h1>`
            })
          }
    }

MercedElement.makeTag('my-header', MyHeader);