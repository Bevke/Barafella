var muaCopyrightElem = document.getElementById("mua-copyright");

var muaCopyrightParagraph = document.createElement('p');
muaCopyrightParagraph.innerHTML = 'Copyright &copy; '+new Date().getFullYear()+' Barafella';

muaCopyrightElem.appendChild(muaCopyrightParagraph);
