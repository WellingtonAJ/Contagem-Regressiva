//coleta de dados 
const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

//setando a data final
const formatura = "1 oct 2023"

//funcao relogio ATIVAR!
function countDown(){
    // 
    const dataForm = new Date(formatura)
    const hoje = new Date()
    
    const segundosT = (dataForm - hoje)/1000;
    
    const finalDias = Math.floor(segundosT / 60 / 60 / 24); 
    const finalHoras = Math.floor(segundosT /60 /60) % 24;
    const finalMinutos = Math.floor(segundosT / 60) % 60;
    const finalSegundos = Math.floor(segundosT) % 60;
    
    dia.innerHTML = formatoTempo(finalDias)
    hora.innerHTML = formatoTempo(finalHoras)
    minuto.innerHTML = formatoTempo(finalMinutos)
    segundo.innerHTML = formatoTempo(finalSegundos)
    

}

//formatação do relogio
function formatoTempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}

//atualização por segundos das informaçoes do html
countDown();
setInterval(countDown, 1000);