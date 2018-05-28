$(document).ready(function(){
    $('#btnGerar').click(function(){
		
		
        let dia = parseInt(0) ;
        let mes = "";

        let diaSaida;
        let mesSaida;
    
        dia = $('#dia-do-nascimento').val();
        mes = $('#mes-do-nascimento').val();
        
        if(dia == ""){
            alert("preencha o dia")
        }
        if(mes == ""){
            alert("preencha o mês");
        }

        switch(mes.toLocaleLowerCase()){
            case "janeiro":
            mesSaida = "Comunista";
            break;
    
            case "fevereiro":
            mesSaida = "petralha"
            break;
    
            case "março":
            mesSaida = "feminazi"
            break;
    
            case "abril":
            mesSaida = "sindicalista"
            break;
    
            case "maio":
            mesSaida = "baderneiro(a)"
            break;
    
            case "junho":
            mesSaida = "socialista"
            break;
    
            case "julho":
            mesSaida = "vagabundo(a)";
            break;
    
            case "agosto":
            mesSaida = "marxista"
            break;
    
            case"setembro":
            mesSaida = "ateuzinho"
            break;
    
            case "outrubro":
            mesSaida = "zé droguinha"
            break;
    
            case "novembro":
            mesSaida = "esquerdista"
            break;
    
            case "dezembro":
            mesSaida = "mortadela"
            break;
            
            default:
            alert("Desculpe, o mês " + mes + " não existe.<br>");
           
        }
        if(dia == 0 || dia <0){
            alert("numero inválido");
        }
        else if(dia == 1){
            diaSaida = "estudante de humanas"
        }
        else if(dia == 2){
                diaSaida = "de iPhone"
        }
        else if(dia == 3){
            diaSaida = "gayzista"
        }
        else if(dia == 4){
            diaSaida = "islamico(a)"
        }
        else if(dia == 5){
            diaSaida = "de dread"
        }
        else if(dia == 6){
            diaSaida = "do foro de São Paulo"
        }
        else if(dia == 7){
            diaSaida = "Abortista"
        }
        else if(dia == 8){
            diaSaida = "defensor(a) de bandido"
        }
        else if(dia == 9){
            diaSaida = "cortadora de pinto"
        }
        else if(dia == 10){
            diaSaida = "militante do pstu"
        }
        else if(dia == 11){
            diaSaida = "sustentado pelo papai"
        }
        else if(dia == 12){
            diaSaida = "do DCE"
        }
        else if(dia == 13){
            diaSaida = "que vende miçanga"
        }
        else if(dia == 14){
            diaSaida = "da CUT"
        }
        else if(dia == 15){
            diaSaida = "que faz textão"
        }
        else if(dia == 16){
            diaSaida = "doutrinado pelo MEC"
        }
        else if(dia == 17){
            diaSaida = "macumbeiro(a)"
        }
        else if(dia == 18){
            diaSaida = "que recebe bolsa esmola"
        }
        else if(dia == 19){
            diaSaida = "que mostra os peitos"
        }
        else if(dia == 20){
            diaSaida = "comedor(a) de caviar"
        }
        else if(dia == 21){
            diaSaida = "amante de cuba"
        }
        else if(dia == 22){
            diaSaida = "do suvaco peludo"
        }
        else if(dia == 23){
            diaSaida = "que odeia cristão"
        }
        else if(dia == 24){
            diaSaida = "heterofobico(a)"
        }
        else if(dia == 25){
            diaSaida = "de camiseta do Che"
        }
        else if(dia == 26){
            diaSaida = "do vomitaço"
        }
        else if(dia == 27){
            diaSaida = "politicamente correto"
        }
        else if(dia == 28){
            diaSaida = "fã de jean willys"
        }
        else if(dia == 29){
            diaSaida = "do bumbum guloso"
        }
        else if(dia == 30){
            diaSaida = "gordo(a)"
        }
        else if(dia == 31){
            diaSaida = "saudosista da URSS"
        }
        else{
            alert("numero inválido");   
        }
        
    //document.querySelector('p').innerHTML = mesSaida + " " + diaSaida;
    $('#resposta').html(mesSaida + " " + diaSaida);
     limpaCampos();   
    });
});

function limpaCampos(){
   $('#dia-do-nascimento').val("");
   $('#mes-do-nascimento').val("");
        
}