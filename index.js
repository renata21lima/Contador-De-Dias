//Data final da contagem
const dataFinal = new Date('December 31,2024 00:00:00').getTime();

//Atualizar contagem
function atualizarContagemRegressiva(){
    //tempo final
    const agora = new Date().getTime(); //timestamp da data e hora atuais
    const diferencaDeTempo = dataFinal - agora; //calcula a diferença em milissegundos entre a data final e a data atual.

    //tempo calculo
    const dias = Math.floor(diferencaDeTempo / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencaDeTempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencaDeTempo % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencaDeTempo % (1000 * 60)) / 1000);

    //pegando id's do html
    document.getElementById('dias').innerText = dias;
    document.getElementById('horas').innerText = horas;
    document.getElementById('minutos').innerText = minutos;
    document.getElementById('segundos').innerText = segundos;

    //condicional quando o tempo acabar
    if(diferenca < 0){
        clearInterval(intervalo);
        document.getElementById('titulo').innerText = 'A contagem terminou!'; //pegando id do html
    }
}

//quando deve atualizar
const intervalo = setInterval(atualizarContagemRegressiva, 1000); // intervalo que executa a função atualizarContagemRegressiva a cada 1 segundo, garantindo a atualização em tempo real.