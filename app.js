const jokes = document.querySelector("#joke");
const button = document.querySelector("button");
const buttonRemove = document.querySelector("#removeButton");
const buttonRemoveSingle = document.querySelector("#remove1");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLi = document.createElement("LI");
  newLi.append(jokeText);
  jokes.append(newLi);
};
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    console.log("error", e);
  }
};

button.addEventListener("click", addNewJoke);
buttonRemove.addEventListener("click", function () {
  const jokeItems = document.querySelectorAll("#joke li");
  for (const i of jokeItems) {
    i.remove();
  }
  //   jokeItems.forEach((item) => item.remove());
});

buttonRemoveSingle.addEventListener("click", function () {
  const lastJoke = jokes.lastElementChild; // Get the last <li> element
  if (lastJoke) {
    lastJoke.remove(); // Remove the last <li> element if it exists
  } else {
    alert("No jokes to remove!"); // Alert if there are no jokes
  }
});
