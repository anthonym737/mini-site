import uuid from "react-uuid";
import dsr from "../assets/dead-space-remake.png"
import di2 from "../assets/dead-island-two.png"
import ttw from "../assets/tiny-tina-wonderland.png"
import codw2 from "../assets/cod-warzone-2.png"
import oppw from "../assets/one-piece-pirate-warriors-4.png"
import ps5 from "../assets/ps5.png"
import seriesx from "../assets/series-x.png"
import pcg from "../assets/pc-gaming.png"

export const itemList = [
    {
        id: uuid(),
        name : "Dead Space Remake",
        categorie : "Jeux",
        fire: 5,
        type : "Horreur",
        price: "59.99",
        date: "2023",
        description : "bon jeu d'horreur",
        cover: dsr
    },
    {
        id: uuid(),
        name : "Dead Island 2",
        categorie : "Jeux",
        fire: 5,
        type : "Horreur",
        price: "79.99",
        date: "2023",
        description : "bon jeu d'horreur",
        cover: di2
    },{
        id: uuid(),
        name : "Tiny Tina's Wonderland",
        categorie : "Jeux",
        fire: 5,
        type : "rpg",
        price: "19.99",
        date: "2020",
        description : "bon jeu",
        cover: ttw
    },{
        id: uuid(),
        name : "COD : Warzone 2",
        categorie : "Jeux",
        fire: 4,
        type : "Horreur",
        price: "99.99",
        date: "2023",
        description : "bon jeu de guerre",
        cover: codw2
    },{
        id: uuid(),
        name : "One Piece Pirate Warriors 4",
        categorie : "Jeux",
        fire: 4,
        type: "baston",
        price: "29.99",
        date: "2020",
        description : "Incarnez vos personnages préférés",
        cover: oppw
    },{
        id: uuid(),
        name : "PS5",
        categorie : "Consoles",
        price: "299.99",
        date: "2021",
        description : "Meilleure console",
        cover: ps5
    },{
        id: uuid(),
        name : "Xbox series-X",
        categorie : "Consoles",
        type : "aventure",
        price: "299.99",
        date: "2021",
        description : "Meilleure console",
        cover: seriesx
    },{
        id: uuid(),
        name : "PC Gaming",
        genre : "Consoles",
        type : "aventure",
        price: "2299.99",
        date: "2022",
        description : "Dieu",
        cover: pcg
    },
    
]