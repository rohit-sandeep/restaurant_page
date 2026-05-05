export function loadAbout() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Wipe existing content

    const headline = document.createElement("h1");
    headline.textContent = "Contact Us";

    const address = document.createElement("p");
    address.textContent = "123 Valhalla Lane, Asgard City";

    const phone = document.createElement("p");
    phone.textContent = "Call us: 555-ODIN-SON";

    content.appendChild(headline);
    content.appendChild(address);
    content.appendChild(phone);
}