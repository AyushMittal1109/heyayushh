const hobbiesData = [ 
    { title: "Photo Editing", src: "./images/lightroom.png", description: "Summer Internship In Walmart..." }, 
    { title: "Gymming", src: "./images/gym.png", description: "Software Engineer in Walmart" },
    { title: "Boxing", src: "./images/boxing.png", description: "Software Engineer in Walmart" }

]

const createAboutCard = (data) => {
    const card = document.createElement("div");
    card.classList.add("about-card");

    const cardLeft = document.createElement("div");
    cardLeft.classList.add("about-card-left")

    const cardRight = document.createElement("div");
    cardRight.classList.add("about-card-right")

    const img = document.createElement("img");
    img.classList.add("about-img");
    img.src = data.src;
    img.alt = data.title;

    cardLeft.appendChild(img);

    const description = document.createElement("p");
    description.classList.add("porject-p");
    description.textContent = data.description;

    const title = document.createElement("h3");
    title.classList.add("about-title")
    title.textContent = data.title;
    
    cardRight.appendChild(title);
    cardRight.appendChild(description);

    

    card.appendChild(cardLeft);
    card.appendChild(cardRight);
    

    

    return card;
}

document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById("hobbies-container");
    hobbiesData.forEach(data => {
        const card = createAboutCard(data);
        cardContainer.appendChild(card);
        
    })
})