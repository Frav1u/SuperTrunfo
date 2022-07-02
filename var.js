var carta1 = {
 nome:"Giannis Antetokounmpo",
 imagem:"https://www.opovo.com.br/_midias/jpg/2021/07/21/750x500/1_giannis_antetokounmpo_nba_milwaukee_bucks-16482805.jpg",
 atributos: {
     finishing: 91,
     defense: 89,
     shooting: 72,
     handle: 87,
  }

 } ;
 var carta2 = {
    nome:"LeBron James",
    imagem:"https://conteudo.imguol.com.br/c/esporte/84/2021/05/31/lebron-james-do-los-angeles-lakers-1622459867743_v2_600x600.jpg.webp",
    atributos: {
        finishing: 87,
        defense: 80,
        shooting: 80,
        handle: 87,
     }
   
    } ;
var carta3 = {
    nome:"kevin Durant",
    imagem:"https://jumperbrasil.lance.com.br/wp-content/uploads/2020/12/Kevin-Durant-2-2.jpg",
    atributos: {
        finishing: 80,
        defense: 71,
        shooting: 88,
        handle: 92,
     }
   
    } ;
 var carta4 = {
    nome:"Joel Embiid",
    imagem:"https://media.gettyimages.com/photos/joel-embiid-of-the-philadelphia-76ers-dunks-over-jarrett-allen-of-the-picture-id1238429629?s=612x612",
    atributos: {
        finishing: 85,
        defense: 80,
        shooting: 82,
        handle: 57,
     }
   
    } ;
var carta5 = {
    nome:"Stephen Curry",
    imagem:"https://media.moneytimes.com.br/uploads/2021/09/stephen-curry.jpg",
    atributos: {
        finishing: 52,
        defense: 52,
        shooting: 99,
        handle: 97,
     }
       
    } ;
var carta6 = {
        nome:"Nikola Jokic",
        imagem:"https://cdn.abcdoabc.com.br/jokic-nba-20-01_4db689cc.jpg",
        atributos: {
            finishing: 85,
            defense: 64,
            shooting: 82,
            handle: 76,
         }
           
    } ;
var carta7 = {
    nome:"Luka Doncic",
    imagem:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/11/09/10/luka-doncic-0.jpg?quality=75&width=982&height=726&auto=webp",
    atributos: {
        finishing: 75,
        defense: 60,
        shooting: 86,
        handle: 94,
     }
       
    } ;    
var carta8 = {
    nome:"Kawhi leonard",
    imagem:"https://jumperbrasil.lance.com.br/wp-content/uploads/2021/05/Kawhi-Leonard-1.jpg",
    atributos: {
        finishing: 76,
        defense: 75,
        shooting: 83,
        handle: 86,
     }
       
    } ;
var carta9 = {
    nome:"Ja morant",
    imagem:"https://static01.nyt.com/images/2020/08/05/sports/03nba-morant-love/merlin_166235259_515cc7a6-2c38-4785-809e-2cae1eb1ecb1-mobileMasterAt3x.jpg",
    atributos: {
        finishing: 80,
        defense: 56,
        shooting: 81,
        handle: 92,
     }
       
    } ;    
var carta10 = {
    nome:"Jimmy Butler",
    imagem:"https://st3.depositphotos.com/34687568/36899/i/600/depositphotos_368993428-stock-photo-miami-heats-jimmy-butler-22.jpg",
    atributos: {
        finishing: 70,
        defense: 72,
        shooting: 75,
        handle: 86,
     }
       
    } ;    
var carta11 = {
    nome:"Anthony Davis",
    imagem:"https://pbs.twimg.com/media/E82S4-uXsAA1sne.jpg",
    atributos: {
        finishing: 87,
        defense: 87,
        shooting: 70,
        handle: 75,
     }
       
    } ; 
var carta12 = {
    nome:"James Harden",
    imagem:"https://www.rbsdirect.com.br/filestore/5/3/6/9/7/9/1_e9598fdd24aa77d/1979635_06bcc9df2d7227b.jpg?w=800&h=535&a=c%201x",
    atributos: {
        finishing: 70,
        defense: 62,
        shooting: 87,
        handle: 97,
     }
       
    } ;    
var carta13 = {
    nome:"Kyrie Irving",
    imagem:"https://nypost.com/wp-content/uploads/sites/2/2022/03/Kyrie-Irving-14.jpg",
    atributos: {
        finishing: 80,
        defense: 53,
        shooting: 84,
        handle: 99,
     }
       
    } ;    
var carta14 = {
    nome:"Demar Derozan",
    imagem:"https://www.theplayoffs.com.br/wp-content/uploads/2021/12/DeRozan-vs-Hawks.jpg",
    atributos: {
        finishing: 77,
        defense: 77,
        shooting: 77,
        handle: 83,
     }
       
    } ;    
var carta15 = {
    nome:"Chris Paul",
    imagem:"https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2021/06/03/1537686456-chris-paul-4.jpg",
    atributos: {
        finishing: 47,
        defense: 66,
        shooting: 79,
        handle: 93,
     }
       
    } ;    

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12, carta13, carta14, carta15,]
 
var cartaMaquina;
var cartaJogador;


function sortearCarta() {
var numeroCartaMaquina = parseInt(Math.random() * 15);
cartaMaquina = cartas[numeroCartaMaquina];

var numeroCartaJogador = parseInt(Math.random() * 15);
while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(math.random() * 3);
}

cartaJogador = cartas[numeroCartaJogador];
console.log(cartaJogador);


document.getElementById("btnSortear").disabled = true;
document.getElementById("btnJogar").disabled = false;
exibirCartaJogador();
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    }
  }
  
  function jogar() {
    console.log("chamou");
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<label> <input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        " </label>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  



