export function createHome(){
    const content= document.getElementById("content");
    content.innerHTML=""; // Clear existing content
    const home= document.createElement("h1");
    home.textContent="Welcome to our restaurant! We serve delicious food and provide excellent service. Come and enjoy a great dining experience with us!";
    content.appendChild(home);

    const description = document.createElement("p");
    description.textContent = "Our restaurant offers a wide variety of dishes, including vegetarian and vegan options. We use fresh ingredients and our chefs are passionate about creating flavorful meals. Whether you're looking for a romantic dinner or a casual meal with friends, we have the perfect ambiance for you.";
    content.appendChild(description);

    const hours = document.createElement("p");
    hours.textContent = "Opening Hours: Monday - Friday: 11:00 AM - 10:00 PM, Saturday - Sunday: 12:00 PM - 11:00 PM";
    content.appendChild(hours);
    
    const location = document.createElement("p");
    location.textContent = "Location: 123 Food Street, Flavor Town";
    content.appendChild(location);  
}