var mesa = document.getElementById('centroMesa');
var escolhaUsuario
var escolhaAdversario
var contVitorias = document.getElementById('vitorias').children[1]
var contDerrotas = document.getElementById('derrotas').children[1]
var contEmpates = document.getElementById('empates').children[1]
var contJogadas = document.getElementById('jogadas').children[1]
var buttonEmbateAd = document.getElementById('ad')
var buttonEmbateUser = document.getElementById('user')
contVitorias.innerHTML = contDerrotas.innerHTML = contEmpates.innerHTML = contJogadas.innerHTML = 0

function escolha(escolhido){
    if(escolhido == 0){
        escolhaUsuario = 'pedra';
    }else if(escolhido == 1){
        escolhaUsuario = 'papel';
    }else if(escolhido == 2){
        escolhaUsuario = 'tesoura';
    }

    document.body.classList.add('noEvents')
    adversario()
}

function adversario(){
    let valor
    do{
        valor = Math.floor(Math.random() * 3)
    }while(valor > 2)
    if(valor == 0){
        escolhaAdversario = 'pedra';
    }else if(valor == 1){
        escolhaAdversario = 'papel';
    }else if(valor == 2){
        escolhaAdversario = 'tesoura';
    }

    embate()

    setTimeout(verificacao, 1500)
}

function verificacao(){

    let decisao
    if(escolhaUsuario == escolhaAdversario){
        contEmpates.innerHTML++
        decisao = 'e'
    }else if(escolhaUsuario == 'tesoura'){
        if(escolhaAdversario == 'pedra'){
            decisao = 'd'
            contDerrotas.innerHTML++
        }else{
            decisao = 'v'
            contVitorias.innerHTML++
        }
    }else if(escolhaUsuario == 'pedra'){
        if(escolhaAdversario == 'papel'){
            decisao = 'd'
            contDerrotas.innerHTML++
        }else{
            decisao = 'v'
            contVitorias.innerHTML++
        }
    }else if(escolhaUsuario == 'papel'){
        if(escolhaAdversario == 'tesoura'){
            decisao = 'd'
            contDerrotas.innerHTML++
        }else{
            decisao = 'v'
            contVitorias.innerHTML++
        }
    }

    if(decisao == 'e'){
        buttonEmbateAd.style.backgroundColor = '#707070'
        buttonEmbateUser.style.backgroundColor = '#707070'
    }else if(decisao == 'v'){
        buttonEmbateAd.style.backgroundColor = '#707070'
        buttonEmbateUser.style.backgroundColor = '#eee'
    }else if(decisao == 'd'){
        buttonEmbateUser.style.backgroundColor = '#707070'
        buttonEmbateAd.style.backgroundColor = '#eee'
    }

    contJogadas.innerHTML++

    setTimeout(finalizarRodada, 1500);

}

function embate(){
    buttonEmbateAd.style.display = 'block'
    buttonEmbateUser.style.display = 'block'

    buttonEmbateAd.classList.add(escolhaAdversario)
    buttonEmbateUser.classList.add(escolhaUsuario)
}

function finalizarRodada(){
    buttonEmbateAd.style.display = 'none'
    buttonEmbateUser.style.display = 'none'
    
    buttonEmbateAd.style.backgroundColor = '#c5c5c5'
    buttonEmbateUser.style.backgroundColor = '#c5c5c5'

    buttonEmbateAd.classList.remove(escolhaAdversario)
    buttonEmbateUser.classList.remove(escolhaUsuario)

    document.body.classList.remove('noEvents')

}