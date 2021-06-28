// CheckPointo Programação Imp
// Aluno José Pedro - dia 28/06/21  

function pipoca (tempoPipoca) {
    if (tempoPipoca >= 10 && tempoPipoca < 20){
        return 'Prato pronto, bom apetite!!!'
    }
    else if(tempoPipoca > 20 && tempoPipoca <= 30){
        return 'A comida queimou'
    }
    else if (tempoPipoca < 10){
        return 'Tempo insuficiente'
    }
    else if (tempoPipoca > 30){
        return 'Kabumm'
    }
    else {
        return 'Prato inexistente' 
    }
}
//console.log(pipoca(11));

function macarrao (tempoMacarrao) {
    if (tempoMacarrao >= 8 && tempoMacarrao < 16){
        return 'Prato pronto, bom apetite!!!'
    }
    else if(tempoMacarrao > 16 && tempoMacarrao <= 24 ){
        return 'A comida queimou'
    }
    else if (tempoMacarrao < 8){
        return 'Tempo insuficiente'
    }
    else if (tempoMacarrao > 24){
        return 'Kabumm'
    }
    else {
        return 'Prato inexistente' 
    }
}
//console.log(macarrao(10))

function carne (tempoCarne) {
    if (tempoCarne >= 15 && tempoCarne < 30){
        return 'Prato pronto, bom apetite!!!'
    }
    else if(tempoCarne > 30 && tempoCarne <= 45){
        return 'A comida queimou'
    }
    else if (tempoCarne < 15){
        return 'Tempo insuficiente'
    }
    else if (tempoCarne > 45){
        return 'Kabumm'
    }
    else {
        return 'Prato inexistente' 
    }
}
//console.log(carne(21));

function feijao (tempoFeijao) {
    if (tempoFeijao >= 12 && tempoFeijao < 24){
        return 'Prato pronto, bom apetite!!!'
    }
    else if(tempoFeijao > 24 && tempoFeijao <= 36){
        return 'A comida queimou'
    }
    else if (tempoFeijao < 12){
        return 'Tempo insuficiente'
    }
    else if (tempoFeijao > 36){
        return 'Kabumm'
    }
    else {
        return 'Prato inexistente' 
    }
}
//console.log(feijao(38));

function brigadeiro (tempoBrigadeiro) {
    if (tempoBrigadeiro >= 8 && tempoBrigadeiro < 16){
        return 'Prato pronto, bom apetite!!!'
    }
    else if(tempoBrigadeiro > 16 && tempoBrigadeiro <= 24){
        return 'A comida queimou'
    }
    else if (tempoBrigadeiro < 8){
        return 'Tempo insuficiente'
    }
    else if (tempoBrigadeiro > 24){
        return 'Kabumm'
    }
    else {
        return 'Prato inexistente' 
    }
}
//console.log(brigadeiro(30))
