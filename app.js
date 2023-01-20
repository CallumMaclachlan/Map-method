let data = [
  {
    name: "Marth",
    game: "Fire Emblem",
  },
  {
    name: "Samus",
    game: "Metroid",
  },
  {
    name: "Link",
    game: "The Legend of Zelda",
  },
  {
    name: "Peach",
    game: "Super Mario Bros.",
  },
  {
    name: "Luigi",
    game: "Luigi's Mansion",
  },
  {
    name: "Mewtwo",
    game: "Pokemon",
  },
];

const info = document.querySelector("#info");

let details = data.map(function (data) {
  return '<div class="box">' + data.name + ' is from ' + data.game + '</div>';
});

info.innerHTML = details.join("\n");

