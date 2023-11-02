document.title = "DOM 👻";

const header = document.querySelector(".header");
console.log(header);

header.style =
  "background-color:#60D9D1; color:black; padding:1rem;text-align:center; ";

const title = document.getElementById("title");
console.log(title);

title.textContent = "Javascript Dom Project";

const ul = document.querySelector(".nav-item");
console.log(ul);

ul.style =
  "display: flex; justify-content: center; align-items: center; gap: 2rem ; margin-top:.5rem; list-style: none; letter-spacing:2px; font-size:20px; font-weight:bold";

const input1 = document.querySelector("#username");
const input2 = document.querySelector("#password");

console.log(input1);

input1.placeholder = "Mehmet";
input2.placeholder = "123456";

input1.disabled = true;
input2.disabled = true;
input2.type = "text";

input1.style =
  "border:none; border-bottom:1px solid #60D9D1 ;padding:10px ; margin-right:10px";
input2.style =
  "border:none; border-bottom:1px solid #60D9D1 ;padding:10px ;margin-right:10px";

const btn = document.querySelector(".btn");

console.log(btn);

btn.textContent = "Giriş Yap";

btn.style =
  "background-color:#60D9D1 ; color: black;padding:10px; border:none; border-radius:10px;cursor:pointer";

const projects = document.getElementById("projects");
console.log(projects);

console.log(projects.firstElementChild);

projects.firstElementChild.textContent = "Js Dom Projects";

const myProjects = [
  "Hello World!",
  "Guess Number",
  "Checkout Page",
  "Gelir-Gider Projesi",
  "Api Projects",
];

const ulli = projects.lastElementChild;

// 6 adet <li> öğesi oluşturun ve ekleyin
for (let i = 0; i <= 4; i++) {
  const liElement = document.createElement("li");
  liElement.textContent = myProjects[i];
  liElement.style =
    "list-style:none; margin:3px;color:#60D9D1;font-weight:bold;text-align:center";
  ulli.appendChild(liElement); // <li> öğesini <ul> içine ekleyin
}

// ulli.style="list-style:none; margin:10px;"
