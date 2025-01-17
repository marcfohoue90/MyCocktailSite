const cocktails = [
    {
        name: "Mojito Cubain",
        description: "Originaire de Cuba, ce cocktail traditionnel a vu le jour dans les années 1910.",
        ingredients: [
            "Citron vert",
            "Menthe verte fraîche",
            "Sucre de canne (mojito munt)",
            "Eau gazeuse ou Sprite",
            "Glaçons pilés",
            "Avec alcool : Bacardi (Rhum)"
        ],
        image: "images/mojito.jpg"
    },
    {
        name: "Caïpirinha",
        description: "Ce cocktail brésilien est concocté à partir de cachaça, de sucre et de citron vert.",
        ingredients: [
            "5 cl de cachaça (alcool de canne à sucre brésilien)",
            "Citron vert",
            "1 cuillère à soupe de sucre en poudre",
            "1,5 cl de sirop de canne à sucre",
            "Glaçons pilés"
        ],
        image: "images/caipirinha.jpg"
    },
    {
        name: "Lemon Squash",
        description: "Un breuvage qui a fait son apparition pour la première fois en Italie.",
        ingredients: [
            "Jus d'orange",
            "Jus de citron",
            "Grenadine ou Munt",
            "Avec alcool : Vodka ou rhum"
        ],
        image: "images/lemon_squash.jpg"
    },
    {
        name: "Pina Colada",
        description: "Piña colada est un cocktail officiel originaire de l’île de Porto Rico.",
        ingredients: [
            "5 cl de jus d'ananas",
            "3 cl de crème de noix de coco ou lait",
            "Glaçons",
            "Avec alcool : Batida ou rhum"
        ],
        image: "images/pina_colada.jpg"
    },
    {
        name: "Blue Lagoon",
        description: "Le Blue Lagoon est un breuvage conçu à Paris dans les années 1960.",
        ingredients: [
            "5 cl de vodka",
            "3 cl de curaçao bleu",
            "2 cl de jus de citron ou jus d'orange",
            "Glaçons"
        ],
        image: "images/blue_lagoon.jpg"
    },
    {
        name: "Cosmopolitan",
        description: "Un cocktail de couleur rose, populaire aux États-Unis, souvent préféré pour sa couleur attrayante.",
        ingredients: [
            "4 cl de vodka aromatisée au citron",
            "2 cl de triple sec (Grand Marnier ou Cointreau)",
            "2 cl de jus de canneberge (jus d'airelle)",
            "1 cl de jus de citron vert"
        ],
        image: "images/cosmopolitan.jpg"
    },
    {
        name: "Sex on the Beach",
        description: "Un cocktail alcoolisé originaire des États-Unis.",
        ingredients: [
            "4 cl de vodka",
            "3 cl de liqueur de pêche",
            "6 cl de jus d'ananas",
            "10 cl de jus de canneberge"
        ],
        image: "images/sex_on_the_beach.jpg"
    },
    {
        name: "Sex in the Jungle",
        description: "Ce cocktail américain au nom évocateur et estival est une explosion de saveurs.",
        ingredients: [
            "5 cl de jus d'orange",
            "5 cl de jus d'ananas",
            "3 cl de curaçao bleu",
            "2 cl de liqueur de melon",
            "3 cl de rhum (Havana, Bacardi)",
            "3 cl de vodka"
        ],
        image: "images/sex_in_the_jungle.jpg"
    },
    {
        name: "Rainbow Paradise Cocktail",
        description: "Cette boisson séduisante évoque l'ambiance des plages.",
        ingredients: [
            "5 cl de grenadine",
            "20 cl de jus d'orange, jus d'ananas ou jus de mangue",
            "5 cl de curaçao bleu",
            "15 cl de vodka",
            "Glaçons"
        ],
        image: "images/rainbow_paradise.jpg"
    },
    {
        name: "White Lady",
        description: "Le White Lady (ou Dame Blanche) est un cocktail français classique.",
        ingredients: [
            "6 cl de gin",
            "3 cl de triple sec (Cointreau, Grand Marnier)",
            "3 cl de jus de citron vert ou jaune",
            "Glaçons"
        ],
        image: "images/white_lady.jpg"
    },
    {
        name: "Aperol Spritz",
        description: "Originaire d'Italie, le spritz est un cocktail rafraîchissant et populaire.",
        ingredients: [
            "5 cl d'Aperol",
            "6 cl de prosecco (mousseux italien)",
            "2-3 cl d'eau gazeuse",
            "Rondelle d'orange",
            "Glaçons"
        ],
        image: "images/aperol_spritz.jpg"
    },
    {
        name: "Negroni",
        description: "Cocktail italien classique à base de gin, de Martini rouge et de Campari.",
        ingredients: [
            "3 cl de gin",
            "3 cl de Campari",
            "3 cl de Martini rouge",
            "Glaçons"
        ],
        image: "images/negroni.jpg"
    }
];

// Récupérer le conteneur principal
const container = document.querySelector('.cocktail-container');

// Parcourir tous les cocktails et les afficher
cocktails.forEach(cocktail => {
    const card = document.createElement('div');
    card.className = 'cocktail-card';

    // Ajouter le contenu de la carte
    card.innerHTML = `
        <img src="${cocktail.image}" alt="${cocktail.name}" loading="lazy">
        <h2>${cocktail.name}</h2>
        <p>${cocktail.description}</p>
        <ul>
            ${cocktail.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
    `;

    // Ajouter la carte au conteneur principal
    container.appendChild(card);
});
