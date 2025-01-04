const careerData = [ 
    { title: "Software Enginner Intern [May - July 2021]", src: "./images/walmart.png", description: "Summer Internship In Walmart..." }, 
    { title: "Software Engineer 2 [Aug 2023 - Present]", src: "./images/walmart.png", description: "Software Engineer in Walmart" }
]

const createCareerCard = (data) => {
    const card = document.createElement("div");
    card.classList.add("career-card");

    const cardLeft = document.createElement("div");
    cardLeft.classList.add("career-card-left")

    const cardRight = document.createElement("div");
    cardRight.classList.add("career-card-right")

    const img = document.createElement("img");
    img.classList.add("career-img");
    img.src = data.src;
    img.alt = data.title;

    cardLeft.appendChild(img);

    const description = document.createElement("p");
    description.classList.add("porject-p");
    description.textContent = data.description;

    const title = document.createElement("h3");
    title.classList.add("career-title")
    title.textContent = data.title;
    
    cardRight.appendChild(title);
    cardRight.appendChild(description);

    card.appendChild(cardLeft);
    card.appendChild(cardRight);

    

    return card;
}

document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById("career-container");
    careerData.forEach(data => {
        const card = createCareerCard(data);
        cardContainer.appendChild(card);
    })
})