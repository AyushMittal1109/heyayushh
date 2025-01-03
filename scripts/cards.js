const cardData = [ 
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

const createCard = (data) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("card-img");
    img.src = data.src;
    img.alt = data.title;

    const description = document.createElement("p");
    description.classList.add("card-p");
    description.textContent = data.description;

    const title = document.createElement("h3");
    title.textContent = data.title;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);

    

    return card;
}

document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById("card-container");
    cardData.forEach(data => {
        const card = createCard(data);
        cardContainer.appendChild(card);
    })
})