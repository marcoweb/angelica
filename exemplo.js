const ceps = ["01001-000", "19806320", "19973730"];

const lista = document.querySelector("#lista");

async function getCepData(cep, id) {
    const url = "https://viacep.com.br/ws/" + cep + "/json/";
    await fetch(url)
    .then((response) => response.json())
    .then((data) => {
        htmlDiv = document.querySelector("#"+id);
        htmlDiv.querySelector(".accordion-body").appendChild(document.createTextNode(data.logradouro + " / " + data.localidade + " - " + data.uf));
    });
}

ceps.forEach((item, index) => {
    const id = "collapse_" + index;

    let button = document.createElement("button");
    button.classList.add("accordion-button");
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("data-bs-target", "#" + id);
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-controls", id);
    button.appendChild(document.createTextNode(item));
    button.addEventListener("click", () => getCepData(item, id));
    let headerItem = document.createElement("h2");
    headerItem.appendChild(button);
    let htmlDiv = document.createElement("div");
    htmlDiv.classList.add("accordion-item");
    htmlDiv.appendChild(headerItem);
    lista.appendChild(htmlDiv);

    let htmlDivCard = document.createElement("div");
    htmlDivCard.setAttribute("id", id);
    htmlDivCard.classList.add("accordion-collapse", "collapse",  "collapse");
    htmlDivCard.setAttribute("data-bs-parent", "#lista");

    let htmlCardBody = document.createElement("div");
    htmlCardBody.classList.add("accordion-body");

    htmlDivCard.appendChild(htmlCardBody);

    htmlDiv.appendChild(htmlDivCard);
});