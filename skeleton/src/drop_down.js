
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};


export const dogLinkCreator = () => {
  let res = [];


    for (let [key,value] of Object.entries(dogs) ) {
      let li = document.createElement('li');
      li.setAttribute("class", "dog-link");
      li.innerHTML = `<a href = ${value} > ${key} </a>`;
      res.push(li);
    }

    return res;

};


 export const attachDogLinks = () => {

  let dogLinks = dogLinkCreator();
  let ul = document.querySelector(".drop-down-dog-list");

  dogLinks.forEach ( li => {
    ul.append(li);
  });
};

export const handleEnter = () => {
  let h3 = document.querySelector("h3");
  let ul = document.querySelector(".drop-down-dog-list");
  ul.setAttribute("id", "hidden");
  
  h3.addEventListener("mouseenter" , (e) => {
  
    ul.removeAttribute("id");

  });

};

export const handleLeave = () => {
  
  
  let ul = document.getElementById("hidden");
  ul.addEventListener("mouseleave", (e) => {
    ul.setAttribute("id", "hidden");

  });
};

attachDogLinks();
handleEnter();
handleLeave();




