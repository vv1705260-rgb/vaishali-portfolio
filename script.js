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
fetch("projects.json")
.then(response => response.json())
.then(data => {
    let container = document.getElementById("project-list");

    data.projects.forEach(project => {
        let div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.tech}</p>
            <a href="${project.link}" target="_blank">View Project 🔗</a>
        `;

        container.appendChild(div);
    });
});
