//captura da lista de teclas no html
const listaTeclas = document.querySelectorAll('.tecla')
//adicionando um evento de click para cada tecla da lista de teclas
listaTeclas.forEach(tecla => {
    tecla.addEventListener('click', () => {
        //cria o texto para a realizar a chamada de som no html
        let som = tecla.classList[1]
        som = `#som_${som}`
        //executando a função passando como parametro o texto criado
        tocaSom(som)

        tecla.onkeydown = function (evento) {

            if (evento.code === 'Space' || evento.code === 'Enter') {
                tecla.classList.add('ativa');
            }
    
        }
        tecla.onkeyup = function () {
            tecla.classList.remove('ativa');
        }

    })
})
//executa o audio 
function tocaSom (som) {
    const elemento = document.querySelector(som)
    
    if(elemento && elemento.localName === 'audio'){
        elemento.play()
    }else{
        console.log('Elemento não encontrado ou seletor invalido')
    }

}
