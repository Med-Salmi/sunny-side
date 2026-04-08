import Hero from "./components/Hero";

const app = document.querySelector("#app");

function render() {
  app.innerHTML = Hero();
}

render();
