let container = document.getElementById("container");
let block = document.getElementsByClassName("block");
let counts = document.getElementsByTagName("span");

let voteList = [
  {
    name: "😀",
    count: 0,
  },
  {
    name: "😊",
    count: 0,
  },
  {
    name: "😑",
    count: 0,
  },
  {
    name: "😦",
    count: 0,
  },
  {
    name: "😪",
    count: 0,
  },
];

function template(name, count) {
  return `
      <div class="v-item">
          <div class="block">${name}</div>
          <span> ${count} </span>
       </div>
        `;
}

voteList.forEach((item) => {
  container.innerHTML += template(item.name, item.count);
});

for (let i = 0; i < block.length; i++) {
  block[i].addEventListener("click", () => {
    voteList[i].count += 1;
    counts[i].innerHTML = voteList[i].count;
  });
}
