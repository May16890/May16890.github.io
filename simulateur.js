var form = document.querySelector('.section_form');
var select = document.querySelector('.form_entreprise select');
var check_materials = document.querySelectorAll('.form_materieux input');
var check_products = document.querySelectorAll('.form_produits input');

//empeche le formulaire de rafraichir la page
function handleForm(event) { event.preventDefault(); } form.addEventListener('submit', handleForm);

//data
  var Nidavellir = {
    materiaux : [
      'Unobtanium',
      'Adamantium',
      'Gundamium',
      'Gallium'
    ],
    produits : [
      'Cuivre',
      'Pièces détachées'
    ]
  }
  var Kamino = {
    materiaux : [
      'Kryptonite',
      'Calystène',
      'Vibranium',
      'Fluoxytus'
    ],
    produits : [
      'Magnésium',
      'Acide salicylique'
    ]
  }
  var Sakaar = {
    materiaux : [
      'Mandalorien',
      'Tibanna',
      'Latinium',
      'Palitrolium'
    ],
    produits : [
      'Kérosène',
      'Paraffine'
    ]
  }
  var Alpha = {
    materiaux : [
      'Orichalque',
      'Ébonite',
      'Polyestium',
      'Zyrtex'
    ],
    produits : [
      'Coton',
      'Laine'
    ]
  }
  var Xandar = {
    materiaux : [
      'Bifröst',
      'Granitium',
      'Tomacco',
      'Cluseol'
    ],
    produits : [
      'Engrais chimiques',
      'Fourrage'
    ]
  }
  var Mustafar = {
    materiaux : [
      'Uradium',
      'Plastacier',
      'Carbonite',
      'Xalitium'
    ],
    produits : [
      'Copeaux',
      'Broyeur plastique'
    ]
  }
//data

//lance la simulation et donne le résultat
form.addEventListener('submit', function(){
  simulationMateriaux();
  simulationProduits();
  choose();
  displayPlanete();
})

var resultMateriaux = [];
var resultProduits = [];
var finalResult = null;
function simulationMateriaux(){

  var tabl = [];

  for (var i = 0; i < check_materials.length; i++) {
    if(check_materials[i].checked == true){
    var materials = check_materials[i].value
    tabl.push(materials);
    }
  }

  //Compare avec Nidavellir
  var countNida = 0;
  for (var j = 0; j < tabl.length; j++) {
    for (var i = 0; i < Nidavellir.materiaux.length; i++) {
      if(tabl[j] == Nidavellir.materiaux[i]){
        countNida ++;
      }
    }
  }
  //Compare avec Kamino
  var countKamino = 0;
  for (var j = 0; j < tabl.length; j++) {
    for (var i = 0; i < Kamino.materiaux.length; i++) {
      if(tabl[j] == Kamino.materiaux[i]){
        countKamino ++;
      }
    }
  }
  //Compare avec Sakaar
  var countSakaar = 0;
  for (var j = 0; j < tabl.length; j++) {
    for (var i = 0; i < Sakaar.materiaux.length; i++) {
      if(tabl[j] == Sakaar.materiaux[i]){
        countSakaar ++;
      }
    }
  }
  //Compare avec Alpha
  var countAlpha = 0;
  for (var j = 0; j < tabl.length; j++) {
    for (var i = 0; i < Alpha.materiaux.length; i++) {
      if(tabl[j] == Alpha.materiaux[i]){
        countAlpha ++;
      }
    }
  }
  //Compare avec Xandar
  var countXandar = 0;
  for (var j = 0; j < tabl.length; j++) {
    for (var i = 0; i < Xandar.materiaux.length; i++) {
      if(tabl[j] == Xandar.materiaux[i]){
        countXandar ++;
      }
    }
  }
  //Compare avec Mustafar
  var countMustafar = 0;
  for (var j = 0; j < tabl.length; j++) {
    for (var i = 0; i < Mustafar.materiaux.length; i++) {
      if(tabl[j] == Mustafar.materiaux[i]){
        countMustafar ++;
      }
    }
  }


  resultMateriaux = [countNida, countKamino, countSakaar, countAlpha, countMustafar, countXandar]

}
function simulationProduits(){

  var tabl = [];

  for (var i = 0; i < check_products.length; i++) {
    if(check_products[i].checked == true){
    var products = check_products[i].value
    tabl.push(products);
    }
  }

  //Compare avec Nidavellir
  var countNida = 0;
  for (var j = 0; j < tabl.length; j++) {
    for (var i = 0; i < Nidavellir.produits.length; i++) {
      if(tabl[j] == Nidavellir.produits[i]){
        countNida ++;
      }
    }
  }
  //Compare avec Kamino
  var countKamino = 0;
  for (var j = 0; j < tabl.length; j++) {
    for (var i = 0; i < Kamino.produits.length; i++) {
      if(tabl[j] == Kamino.produits[i]){
        countKamino ++;
      }
    }
  }
  //Compare avec Sakaar
  var countSakaar = 0;
  for (var j = 0; j < tabl.length; j++) {
    for (var i = 0; i < Sakaar.produits.length; i++) {
      if(tabl[j] == Sakaar.produits[i]){
        countSakaar ++;
      }
    }
  }
  //Compare avec Alpha
  var countAlpha = 0;
  for (var j = 0; j < tabl.length; j++) {
    for (var i = 0; i < Alpha.produits.length; i++) {
      if(tabl[j] == Alpha.produits[i]){
        countAlpha ++;
      }
    }
  }
  //Compare avec Xandar
  var countXandar = 0;
  for (var j = 0; j < tabl.length; j++) {
    for (var i = 0; i < Xandar.produits.length; i++) {
      if(tabl[j] == Xandar.produits[i]){
        countXandar ++;
      }
    }
  }
  //Compare avec Mustafar
  var countMustafar = 0;
  for (var j = 0; j < tabl.length; j++) {
    for (var i = 0; i < Mustafar.produits.length; i++) {
      if(tabl[j] == Mustafar.produits[i]){
        countMustafar ++;
      }
    }
  }

  resultProduits = [countNida, countKamino, countSakaar, countAlpha, countMustafar, countXandar]
}
function choose(){
  //choisit en fonction des materiaux
  var wich;
  var biggest = Math.max(...resultMateriaux);
  var indexOfBiggest = resultMateriaux.indexOf(biggest);
  if(indexOfBiggest == 0){
    wich = 'Nidavellir';
  } else if(indexOfBiggest == 1){
    wich = 'Kamino';
  } else if(indexOfBiggest == 2){
    wich = 'Sakaar';
  } else if(indexOfBiggest == 3){
    wich = 'Alpha';
  } else if(indexOfBiggest == 4){
    wich = 'Mustafar';
  } else if(indexOfBiggest == 5){
    wich = 'Xandar';
  }
  //choisit en fonction des Produits
  var wich2;
  var biggest2 = Math.max(...resultProduits);
  var indexOfBiggest2 = resultProduits.indexOf(biggest2);
  if(indexOfBiggest2 == 0){
    wich2 = 'Nidavelir';
  } else if(indexOfBiggest2 == 1){
    wich2 = 'Kamino';
  } else if(indexOfBiggest2 == 2){
    wich2 = 'Sakaar';
  } else if(indexOfBiggest2 == 3){
    wich2 = 'Alpha';
  } else if(indexOfBiggest2 == 4){
    wich2 = 'Mustafar';
  } else if(indexOfBiggest2 == 5){
    wich2 = 'Xandar';
  }

  //choix en fonction du résultat des 2 choix précédents
  if (wich == wich2) {
    finalResult = wich;
  } else if (wich != wich2) {
      if (biggest > biggest2) {
        finalResult = wich;
      } else if ( biggest2 > biggest){
        finalResult = wich2;
      } else if (biggest == biggest2){
        var random = Math.random() * (2 - 0) + 0;
        if (random <= 1) {
          finalResult = wich;
        } else if (random > 1 || random == 2) {
          finalResult = wich2;
        }
      }
    }

}
function displayPlanete(){
  var result = document.querySelector('#planete');
  var planete_name = document.querySelector('.planete_name');
  var planete_img = document.querySelector('.planete_img');
  var planete_materials = document.querySelectorAll('.planete_materials li');
  var planete_products = document.querySelectorAll('.planete_products li');
  var planete_helps = document.querySelectorAll('.planete_helps li');
  form.style.display = 'none';
  result.style.display = 'block';
  planete_img.src = "img/" + finalResult + ".png";
  planete_name.innerHTML = finalResult;//maj le nom de la planete
  function planeteIMG() {
    //maj les materiaux et des produits manufacturés de la planete
    if(finalResult == 'Nidavellir'){
      for (var i = 0; i < planete_materials.length; i++) {
        planete_materials[i].innerHTML = Nidavellir.materiaux[i];
      }
      for (var j = 0; j < planete_products.length; j++) {
        planete_products[j].innerHTML = Nidavellir.produits[j];
      }
    } else if(finalResult == 'Kamino'){
      for (var i = 0; i < planete_materials.length; i++) {
        planete_materials[i].innerHTML = Kamino.materiaux[i];
      }
      for (var j = 0; j < planete_products.length; j++) {
        planete_products[j].innerHTML = Kamino.produits[j];
      }
    } else if(finalResult == 'Sakaar'){
      for (var i = 0; i < planete_materials.length; i++) {
        planete_materials[i].innerHTML = Sakaar.materiaux[i];
      }
      for (var j = 0; j < planete_products.length; j++) {
        planete_products[j].innerHTML = Sakaar.produits[j];
      }
    } else if(finalResult == 'Alpha'){
      for (var i = 0; i < planete_materials.length; i++) {
        planete_materials[i].innerHTML = Alpha.materiaux[i];
      }
      for (var j = 0; j < planete_products.length; j++) {
        planete_products[j].innerHTML = Alpha.produits[j];
      }
    } else if(finalResult == 'Xandar'){
      for (var i = 0; i < planete_materials.length; i++) {
        planete_materials[i].innerHTML = Xandar.materiaux[i];
      }
      for (var j = 0; j < planete_products.length; j++) {
        planete_products[j].innerHTML = Xandar.produits[j];
      }
    } else if(finalResult == 'Mustafar'){
      for (var i = 0; i < planete_materials.length; i++) {
        planete_materials[i].innerHTML = Mustafar.materiaux[i];
      }
      for (var j = 0; j < planete_products.length; j++) {
        planete_products[j].innerHTML = Mustafar.produits[j];
      }
    }
  }
  planeteIMG();
  //maj du % de réduction de la pollution
  var randomNmb1 = Math.floor(Math.random() * (100 - 0)) + 0;
  var randomNmb2 = Math.floor(Math.random() * (50000000 - 1000000)) + 1000000;
  planete_helps[0].innerHTML = randomNmb1 + '% de pollution terreste en moins';
  planete_helps[1].innerHTML = randomNmb2 + '€ de subventions réclamables';
}
