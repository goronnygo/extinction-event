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

const dinoPics = document.querySelectorAll('img')

for (const img of dinoPics) {
    img.addEventListener('click', (event) => {
        event.target.style.width = '0px'
    })
}

const meteorMeButton = document.querySelectorAll('#destroy-all');


function destroyButton(){
    for (const li of lineThru) {
    li.style.textDecoration = "line-through";
    }


    for (const ul of lineOpc) {
    ul.style.opacity = "0";
    }

    for (const img of dinoPics) {
    img.style.width = '0px'
    }

    meteorMeButton.addEventListener('click', destroyButton)
}
