let openMenu = document.getElementById("menu");
let closeMenu = document.getElementById("close-menu");
let links = document.getElementById("linksNavigation");

const pieces = ['pawn', 'knight', 'bishop', 'rook', 'queen', 'king'];

openMenu.addEventListener('click', () => {
    links.style.display = "inline";
})

closeMenu.addEventListener('click', () => {
    links.style.display = "none";
})

let pieceImageDiv1, pieceImageDiv2;
let target = document.getElementsByClassName('content')[0];

function changePiece() {
    let random_idx = Math.floor(Math.random() * 6);
    let piece = pieces[random_idx];
    let image = document.createElement('img');
    let imageName = piece + '.png';
    image.src = imageName;

    if (piece == 'king') {
        image.style.width = "6em";
        image.style.height = "12em";
    }
    else if (piece == 'rook') {
        image.style.width = "6em";
        image.style.height = "9em";
    }
    else {
        image.style.width = "7em";
        image.style.height = "7em";
    }

    pieceImageDiv1 = document.createElement('div');
    pieceImageDiv1.appendChild(image);
    pieceImageDiv1.className = piece;

    target.removeChild(target.firstElementChild);
    target.removeChild(target.lastElementChild);

    pieceImageDiv2 = pieceImageDiv1;

    target.insertBefore(pieceImageDiv1, null);
    target.insertBefore(pieceImageDiv1.cloneNode(true), target.children[0]);
}

setInterval(changePiece, 3000);

const x = window.matchMedia("(max-width: 600px)");
let resources = document.getElementById('resources');
let submenu = document.getElementsByClassName('submenu')[0];
resources.addEventListener('mouseover', () => {
    if (x.matches)
        submenu.style.display = 'none';
    else
        submenu.style.display = 'block';
})
resources.addEventListener('mouseleave', () => {
    submenu.style.display = 'none';
})
submenu.addEventListener("mouseover", () => {
    submenu.style.display = 'block';
})
submenu.addEventListener("mouseleave", () => {
    submenu.style.display = 'none';
})
