export function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Wipe existing content

    const headline = document.createElement("h1");
    headline.textContent = "Our Menu";

    const menuList = document.createElement("ul");
    const dishes = ["Odin Burger - $15", "Thor's Steak - $25", "Loki's Pasta - $18"];
    
    dishes.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        menuList.appendChild(li);
    });

    content.appendChild(headline);
    content.appendChild(menuList);
}