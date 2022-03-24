let buyButton = document.querySelector("button");

function buyIngredients() {
  let name = prompt("What is your name ?");
  let country = prompt("In which country do you live ?");
  let email = prompt("What is your email ?");
  country = country.toLowerCase().trim();

  if (country === "france") {
    alert(
      "🌟Bonjour🌟 " +
        name +
        ", merci pour ton email 😁, nous te contacterons prochainement! En attendant visite notre section share recipe pour trouver de l'inspiration!  🥰"
    );
  } else {
    alert(
      "Hello " +
        name +
        ", thank your for your email! 😁 We'll be in touch soon to give you a list of the best stores in " +
        country +
        "! In the meantime, check our share your recipe section to get inspiration! 🥰 "
    );
  }
}

buyButton.addEventListener("click", buyIngredients);
