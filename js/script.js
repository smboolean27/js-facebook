/*
  Definisco un array di oggetti che rappresenteranno i posts della bacheca di FB.
  N.B questi dati potrebbero arrivare dall'esterno (lo vedremo più avanti!)
*/

var posts = [
  {
    autore: {
      nome: "Samuele",
      cognome: "Madrigali",
      avatar: "https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
    },
    orario: 1,
    testo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    immagine: "https://via.placeholder.com/600x300",
    commenti: [
      {
        autore: {
          mome: "Andrea",
          avatar: "https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512",
        },
        testo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  },
  {
    autore: {
      nome: "Alice",
      cognome: "Sinelli",
      avatar: "https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
    },
    orario: 2,
    testo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    immagine: "https://via.placeholder.com/600x300",
    commenti: [
      {
        autore: {
          mome: "Andrea",
          avatar: "https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512",
        },
        testo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  }
];

/*
  Primo Metodo ( BRUTALE!!! :-) ) per aggiungere i posts all'interno della pagina.
  In questo caso abbiamo il markup HTML del post mischiato alla logica JS (forte dipendenza dell'HTML con il JS e viceversa!)
  il risultato è un codice complesso, sporco e poco manutenibile in futuro
*/
// for ( var i = 0; i < posts.length; i++ ) {
//   var postHtml = '<article class="post">';
//   postHtml += '<div class="post__header">';
//   postHtml += '<div class="post__author">';
//   postHtml += '<img class="post__author-img" src="' + posts[i].autore.avatar + '" alt="">';
//   postHtml += '<div class="post__author-info">';
//   postHtml += '<h4 class="post__author-name">' + posts[i].autore.nome + ' ' + posts[i].autore.cognome + '</h4>';
//   if ( typeof(posts[i].orario) != 'undefined' ) {
//     postHtml += '<time class="post__time">' + posts[i].orario + 'h</time>';
//   }
//   postHtml += '</div>';
//   postHtml += '</div>';
//   postHtml += '</div>';
//   postHtml += '</article>';
//   $(".page-content").append(postHtml);
// }

/*
  Secondo Metodo per aggiungere i posts all'interno della pagina.
  Utiliziamo un template (markup HTML pronto per essere manipolato, inserito e nascosto all'interno della nostra pagina) in modo da separare la rappresentazione (HTML) dalla logica (JS)
*/
for ( var i = 0; i < posts.length; i++ ) {
  // 1. clono il mio template
  var postTemplate = $('.template .post').clone();

  // 2. aggiungo le informazioni al mio oggetto clonato!
  postTemplate.find('.post__author-img').attr('src', posts[i].autore.avatar);
  postTemplate.find('.post__author-name').text(posts[i].autore.nome + " " + posts[i].autore.cognome);
  if ( typeof(posts[i].orario) != 'undefined' ) {
    postTemplate.find('.post__time').text(posts[i].orario+"h");
  }

  // 3. Lo inietto nella pagina
  $(".page-content").append(postTemplate);
}
