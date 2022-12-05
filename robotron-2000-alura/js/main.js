function dizOi(nome) {
    
    console.log(`Oi ${nome}`);
    console.log('Bem vindo ao Robotron 2000');
}

dizOi('Paulo');

const robotron = document.querySelector("#robotron");

robotron.addEventListener("click", function(event) {
    console.log(event);

});