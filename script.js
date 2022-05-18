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

function validate() {
    let phoneNumber = document.getElementById('phone-number').value;
    // regex ce valideaza numerele de telefon incepand cu 07, apoi ceva din {2, ..., 8} si apoi 7 cifre
    let phoneREGEX = /^[0][7][2-8]([0-9]{7})$/;
    let phoneResult = phoneREGEX.test(phoneNumber);
    if (!phoneResult) {
        alert("invalid phone number!");
        return false;
    }

    // ?`mF$?tcn2)`>9E]
    let password = document.getElementById('pass').value;
    let passREGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    let passResult = passREGEX.test(password);
    if (!passResult) {
        alert("invalid password! should contain 1 lowercase, 1 uppercase, 1 special, 1 numeric, at least 8 in length!");
        return false;
    }

    let birthday = document.getElementById('birthday').value;
    alert(birthday.toString());

    let password2 = document.getElementById('pass2').value;
    if (password != password2) {
        alert("passwords don't match!");
        return false;
    }

    let chessELO = document.getElementById('elo').value;
    if (chessELO < 600 || chessELO > 3000) {
        alert("elo should be between 600 and 3000");
        return false;
    }
}

let arrows = document.getElementsByClassName('right-arrow');
let players = document.getElementsByClassName('player-card');
// console.log(arrows.length)
// console.log(players.length)
let idxHide = 0;

arrows[0].addEventListener('click', hidePlayer);
arrows[1].addEventListener('click', hidePlayer);
arrows[2].addEventListener('click', hidePlayer);

function hidePlayer() {

    // players[idxHide].style.transform = 'translate(-300%, 0)';
    // setTimeout(function () {

    // }, 5000);
    players[idxHide].style.display = 'none';
    players[(idxHide + 1) % 3].style.display = 'flex';
    idxHide += 1;
    idxHide %= 3;
}

// transitionPlayers();