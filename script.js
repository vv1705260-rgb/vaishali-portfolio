let text = "BCA Student | Future Developer | Creative Mind";
let i = 0;

function typing() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}

typing();
.navbar {
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
    background: rgba(0,0,0,0.3);
    position: sticky;
    top: 0;
}

.navbar a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
}

.navbar a:hover {
    color: #f72585;
}
