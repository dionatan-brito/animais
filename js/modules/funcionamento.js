export default function iniitFuniconamento(){

    const funcionamento = document.querySelector('[data-semana]');
    
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
    
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
    
    const dataAgora = new Date();
    
    const diaAgora = dataAgora.getDay()
    
    const horarioAgora = dataAgora.getHours()
    
    const diaUtil = diasSemana.indexOf(diaAgora) !== -1;
    
    const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];
    
    if(diaUtil && horarioAberto)
    funcionamento.classList.add("aberto");
}





