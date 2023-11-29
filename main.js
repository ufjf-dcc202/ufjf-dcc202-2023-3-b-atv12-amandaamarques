const olJoao = document.querySelector("#joao");
const olMaria = document.querySelector("#maria");

document.entrada.addEventListener('submit', leFormulario);

function leFormulario(event){
    event.preventDefault();
    const quantidade = document.entrada.quantidade.valueAsNumber;
    const fruta = document.entrada.fruta.value;
    const origem = document.entrada.origem.value;
    const destino = document.entrada.destino.value;

    console.log(`Eu tenho ${quantidade} ${fruta}`);
    //document.entrada.submit();
}