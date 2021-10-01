let array = [
    'Buenos días!',
    'Buenas tardes!',
    'Buenas noches!',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae optio cumque doloremque veniam quos eaque architecto odio praesentium, voluptatem esse mollitia quidem deleniti pariatur doloribus quae omnis et tenetur id!',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae optio cumque doloremque veniam quos eaque architecto odio praesentium, voluptatem esse mollitia quidem deleniti pariatur doloribus quae omnis et tenetur id!',
];

function crearTexto() {
    let btn = document.getElementsByClassName('btn');
    let textoAqui = document.getElementById('textoAqui');

    for (let i = 0; i < btn.length; i++) {
        let button = btn[i];
        button.addEventListener('click', function () {
            let texto = document.createElement('div');
            texto.innerText = `${array[i]}`;
            textoAqui.appendChild(texto);
        });
    }
}

crearTexto();
