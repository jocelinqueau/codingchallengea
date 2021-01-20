const capsules = [
  [{ id: 1 }, { title: "Learn React" }],
  [{ id: 2 }, { title: "Learn Vue" }],
  [{ id: 3 }, { title: "Learn Elixir" }],
  [{ id: 4 }, { title: "Learn Scala" }],
];

/**
À partir de l'array "capsules" donnez la sortie suivante :
  {
    1: 'Learn React',
    2: 'Learn Vue',
    3: 'Learn Elixir',
    4: 'Learn Scala'
  }
*/

// Solution pour 1
const capsulesObject = {};
for (let i = 0; i < capsules.length; i++) {
  capsulesObject[Object.values(capsules[i][0])] = Object.values(
    capsules[i][1]
  )[0];
}
console.log(capsulesObject);
//
const objectCapsules = capsules.reduce((result, arrayitem) => {
  return { ...result, [arrayitem[0].id]: arrayitem[1].title };
}, {});
console.log(objectCapsules);

// console.log(capsulesObject);
/**
  Vous tombez sur cette fonction dans un coin obsure d'une API, vous devez :
  
  - corriger getTheOfficePerso car elle doit retourner [ 'pam beesly', 'jim halpert' ]
  - la refactor comme il se doit car vous aimez le code actuel et propre
*/

function getFirstname(contactsName) {
  return contactsName.split(" ")[0];
}

const mockAPI = function (perso) {
  const array = ["micheal scott", "pam beesly", "dwight shrute", "jim halpert"];

  const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      // API call
      resolve(array.find((el) => getFirstname(el) == getFirstname(perso)));
    }, 1000);
  });
  return promise;
};

// var getTheOfficePerso = function (callback) {
//   var newArray = new Array();
//   var persoGet = ["pam beesly", "jim"];
//   for (var i = 0; i < persoGet.length - 1; i++) {
//     var fullPerso = mockAPI(persoGet[i]);
//     newArray.push(fullPerso);
//   }

//   callback(newArray);
// };

const getTheOfficePerso = async function (callback) {
  const persoGet = ["pam beesly", "jim"];
  const newArray = await Promise.all(
    persoGet.map((perso) => {
      return mockAPI(perso);
    })
  );

  callback(newArray);
};
// var getTheOfficePerso = async function (callback) {
//   var newArray = new Array();
//   var persoGet = ["pam beesly", "jim"];
//   for (var i = 0; i < persoGet.length; i++) {
//     var fullPerso = await mockAPI(persoGet[i]);
//     newArray.push(fullPerso);
//   }

//   callback(newArray);
// };

getTheOfficePerso(console.log);

// ------------------- ALGO

/**
 Write a sorting function that takes in an array of names and sorts them by last name either alphabetically (ASC) or reverse-alphabetically (DESC).
sortContacts([
  "John Locke",
  "Thomas Aquinas",
  "David Hume",
  "Rene Descartes"
], "ASC") ➞ [
  "Thomas Aquinas",
  "Rene Descartes",
  "David Hume",
  "John Locke"
]
// Aquinas (A) < Descartes (D) < Hume (H) < Locke (L)
sortContacts([
  "Paul Erdos",
  "Leonhard Euler",
  "Carl Gauss"
], "DESC") ➞ [
  "Carl Gauss",
  "Leonhard Euler",
  "Paul Erdos"
]
// Gauss (G) > Euler (EU) > Erdos (ER)
sortContacts([], "DESC") ➞ []
sortContacts(null, "DESC") ➞ []
sortContacts(undefined, "DESC") ➞ []
*/
// console.log("\n");
// function getLastname(contactsName) {
//   return contactsName.split(" ")[1];
// }

// function sortContacts(contacts, order) {
//   if (_.isArray(contacts)) {
//     if (contacts.length == 0) {
//       return [];
//     } else if (order == "ASC") {
//       return contacts.sort((a, b) =>
//         getLastname(a) > getLastname(b) ? 1 : -1
//       );
//     } else if (order == "DESC") {
//       return contacts.sort((a, b) =>
//         getLastname(a) > getLastname(b) ? -1 : 1
//       );
//     } else {
//       console.log("Please provide a correct order, either ASC or DESC");
//     }
//   } else {
//     return [];
//   }
// }
// console.log(
//   sortContacts(
//     ["John Locke", "Thomas Aquinas", "David Hume", "Rene Descartes"],
//     "ASC"
//   )
// );

// console.log(
//   sortContacts(["Paul Erdos", "Leonhard Euler", "Carl Gauss"], "DESC")
// );

// console.log(sortContacts([], "DESC"));
// console.log(sortContacts(null, "DESC"));
// console.log(sortContacts(undefined, "DESC"));

// ------------------- REACT

/**
        React renvoie une erreur sur le composant CustomImage de type "adjacent jsx elements must be wrapped" cependant nous ne souhaitons pas rajouter d'élément HTML pour encapsuler les deux images.
        
        Questions :
        
        1) Avec React, comment pouvez-vous remédier à ce problème ?
        Avec React.Fragment, cela permet de wrapper des elements JSX sans utiliser un élément HTML 
        2) Toujours avec React, comment optimiseriez vous ces deux composants ?
        Selon les articles, les functionals composants sont legerement plus rapide que les class based composants. De plus faire du lazy loading peut augmenter la performance de chargement de ces composants.
        Je me suis permis de mettre la version functional composants

class CustomImage extends React.Component {
  render() {
    return (
        <img width="250" src={this.props.src} />
        <img width="350" src={this.props.src} />
    )
  }
}
const CustomImage = () => (
<>
  <img width="250" src={this.props.src} />
  <img width="350" src={this.props.src} />
</>
  )



class Capsule extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{color: '#FFF'}}>Ma capsule</h1>
        <span style={{color: '#FFF'}}>
      Beautiful dribble
        <CustomImage   src="https://cdn.dribbble.com/users/708045/screenshots/7284505/media/7540889ac0dbc05eee9a3fd5774c47ed.png" />
        </span>
    </div>
    )
  }
}

const Capsule = () => (
     <div>
        <h1 style={{color: '#FFF'}}>Ma capsule</h1>
        <span style={{color: '#FFF'}}>
      Beautiful dribble
        <CustomImage   src="https://cdn.dribbble.com/users/708045/screenshots/7284505/media/7540889ac0dbc05eee9a3fd5774c47ed.png" />
        </span>
    </div>
    )
*/
