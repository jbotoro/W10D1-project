
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  let p = document.createElement("P");

  while ( htmlElement.firstChild) {
    htmlElement.removeChild(htmlElement.firstChild);
  }
  p.append(string);
  htmlElement.appendChild(p);
};

htmlGenerator('Party Time.', partyHeader);


