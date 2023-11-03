//async function obetenerPokemon() {}

const chiste = document.querySelector("#chiste");
const btn = document.querySelector("#request");

const handleClick = async () => {
  console.log("Creando petición...");
  try {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(response.data);
    chiste.textContent = response.data.value;
  } catch (e) {
    console.error(e);
  }
};

btn.addEventListener("click", handleClick);
