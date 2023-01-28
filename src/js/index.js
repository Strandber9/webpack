import hello_word from "./hello.js";
import world_word from "./world.js";
import _ from "lodash"
import '../css/style.css'
import logo from "../img/googlelogo_color_272x92dp.png"

const img = `<img src="${logo}" alt="google logo" />`;

document.querySelector("#root").innerHTML = _.join([hello_word, world_word, img], ' ');
console.log('css', css);

