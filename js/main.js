import { button, container } from "./ui.js"
import { showCountry,nomesPaises } from "./api.js"

nomesPaises()

button.addEventListener("click", showCountry)

container.addEventListener("click", function(event){

  if(event.target.classList.contains("delete-btn")){

    const card = event.target.closest(".card")
    card.remove()

  }

});