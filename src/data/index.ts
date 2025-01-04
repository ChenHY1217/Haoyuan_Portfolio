import { i } from "framer-motion/client";
import { title } from "process";

export const NavbarItems = [
    {name: 'About', link: '#about'},
    {name: 'Experience', link: '#experiences'},
    {name: 'Projects', link: '#projects'},
    {name: 'Contact', link: '#contact'},
];

export const projects = [
    {
        id: 1,
        title: "SoraAi - Language Tutor ChatApp",
        des: "Behold a chatbot specializing in transforming you to the next foreign language expert. The journey begins today!",
        img: "/projectpics/soraai.png",
        iconLists: [
            "/techstacksvgs/react.svg",
            "/techstacksvgs/typescript.svg",
            "/techstacksvgs/tailwindcss.svg",
            "/techstacksvgs/express.svg",
            "/techstacksvgs/node.svg",
            "/techstacksvgs/mongo.svg"
        ],
        link: "https://soraai.onrender.com"
    },
    {
        id: 2,
        title: "Flappy-Bird-with-Neat-Genetic-Algorithm",
        des: "Using NEAT-python genetic algorithm to develop the ideal bird that clears the Flappy Bird game",
        img: "/projectpics/neatflappy.png",
        iconLists: [
            "/techstacksvgs/python.svg",
            "/techstacksvgs/pygame.svg"
        ],
        link: "https://github.com/ChenHY1217/Flappy-Bird-with-Neat-Genetic-Algorithm"
    }
];
