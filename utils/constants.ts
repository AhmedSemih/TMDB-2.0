import { NavItem } from "../types";
import {MdHome, MdTv, MdMovie, MdBolt} from 'react-icons/md';

export const navItems:NavItem[]=[
    {
        name:"Home",
        path:"/",
        Icon:MdHome
    },
    {
        name:"Movies",
        path:"/movies",
        Icon:MdMovie
    },
    {
        name:"TV Series",
        path:"/series",
        Icon:MdTv
    },
    {
        name:"Trending",
        path:"/trending",
        Icon:MdBolt
    }
];

export const tmdbImageUrl:string = "https://image.tmdb.org/t/p/original/";

export const loginAdventages = [
    "Rate movies and series.",
    "Mark as favorite.",
    "Create a watchlist."
];