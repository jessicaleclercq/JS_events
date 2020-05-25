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

//Fonctionnalité 6 (qui ne fonctionne pas)

//Définition des différentes variables 
var view = document.querySelectorAll('.btn-success')
let text = document.querySelectorAll('.card-text')
let img = document.querySelectorAll('.card-img-top')

function reduceCard() {
  if (text.style.display != 'none') {
        text.style.display = 'none';
        img.style.height = "20%";
        img.style.width = "20%";
        } else {
        text.style.display = '';
        img.style.width = '';
        img.style.height = '';
        }
    };

view.addEventListener("mouseover", reduceCard);


//Faire tourner en boucle
//for (let i = 0; i < view.length; i++) {

//Fonction Image passe à 20%
  //let mini_img = function () {
    //img[i].style.width = "20%";
  //}
//Fonction Image passe à 100%
  //let normal_img = function () {
    //img[i].style.width = "100%";
 // }

//Fonction Text disparaît
  //let toggle_text = function () {
    //if (text[i].style.display === 'none') {
      //img[i].style.display = 'block';
    //} else {
    // text[i].style.display = 'none';
    //}
  //}
//let card_i = 0

//Fonction qui rassemble les autres fonctions
//function mini_card () {
    //if (card_i === 0) {
      //mini_img()
      //toggle_text()
      //card_i = 1
    //} else if (card_i === 1) {
      //normal_img()
      //toggle_text()
      //card_i = 0
    //}
  //}
//}
//Callback 
//view.addEventListener("mouseover", mini_card)  



