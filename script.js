// Fonctionnalité 1 et 1(bis)

// 1. On définit la varibale 
let footer = document.querySelector('footer');

//2. Définit la fonction qui va répondre 
let click = 0 
let onFooterClick = function() {
click++
console.log(`cliques ${click}`);
};

//3.Add event listener for element function 
footer.addEventListener("click", onFooterClick);

//Fonctionnalité 2
let button = document.getElementsByTagName('button')[0]

let onMenuClick = function(){
  document.getElementById('navbarHeader').classList.toggle('collapse');
};

button.addEventListener("click", onMenuClick)

//Fonctionnalité 3
let btn = document.getElementsByTagName('button')[2]
console.log(btn)

let onCardClick = function(){
  btn.style ="color: red";
};

btn.addEventListener("click", onCardClick);
 
//Fonctionnalité 4
let btnsecond = document.getElementsByTagName('button')[4]
console.log(btnsecond)

let onSecondCardClick = function() {
    if (btnsecond.style.color === '') {
      btnsecond.style.color = "green";
    } else {
      btnsecond.style.color = '';
    }
  }

btnsecond.addEventListener("click", onSecondCardClick);

//Fonctionnalité 5 
let link = document.querySelector("link");
console.log(link)

let navbar = document.getElementsByTagName("div")[6]
console.log(navbar)

  var deleteCDN = function(){
    if (link.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css")
      {
      link.href ="";
      }
      else { link.href ="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";}
  };

navbar.addEventListener("dblclick", deleteCDN);

