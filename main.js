const lineThru = document.querySelectorAll('ol');

for (const li of lineThru) {
    li.addEventListener('click', function (event) {
        console.log(event);
        const elementThatWasClicked = event.target;
        elementThatWasClicked.style.textDecoration = "line-through";
    });
}

const lineOpc = document.querySelectorAll('ul');

for (const ul of lineOpc) {
    ul.addEventListener('click', function (event) {
        console.log(event);
        const elementThatWasClicked = event.target;
        elementThatWasClicked.style.opacity = "0";
    });
}

