const projectData = [ 
    { title: "Card 1", src: "./images/java.png", description: "This is the first card." }, 
    { title: "Card 2", src: "./images/react.png", description: "This is the second card." }, 
    { title: "Card 3", src: "./images/gmail.png", description: "This is the third card." },
    { title: "Card 1", src: "./images/java.png", description: "This is the first card." }, 
    { title: "Card 2", src: "./images/react.png", description: "This is the second card." }, 
    { title: "Card 3", src: "./images/gmail.png", description: "This is the third card." },
    { title: "Card 1", src: "./images/java.png", description: "This is the first card." }, 
    { title: "Card 2", src: "./images/react.png", description: "This is the second card." }, 
    { title: "Card 3", src: "./images/gmail.png", description: "This is the third card." },
    { title: "Card 1", src: "./images/java.png", description: "This is the first card." }, 
    { title: "Card 2", src: "./images/react.png", description: "This is the second card." }, 
    { title: "Card 3", src: "./images/gmail.png", description: "This is the third card." }
]

const createProjectCard = (data) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    const cardLeft = document.createElement("div");
    cardLeft.classList.add("project-card-left")

    const cardRight = document.createElement("div");
    cardRight.classList.add("project-card-right")

    const img = document.createElement("img");
    img.classList.add("project-img");
    img.src = data.src;
    img.alt = data.title;

    cardLeft.appendChild(img);

    const description = document.createElement("p");
    description.classList.add("porject-p");
    description.textContent = data.description;

    const title = document.createElement("h3");
    title.classList.add("project-title")
    title.textContent = data.title;
    
    cardRight.appendChild(title);
    cardRight.appendChild(description);

    card.appendChild(cardLeft);
    card.appendChild(cardRight);

    

    return card;
}

document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById("project-container");
    projectData.forEach(data => {
        const card = createProjectCard(data);
        cardContainer.appendChild(card);
    })
})