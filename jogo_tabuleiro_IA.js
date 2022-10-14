const coluna = [1,2,3,4,5,6,7,8,9,10,11]
const linha = ['k','j','i','h','g','f','e','d','c','b','a']
const refugio1 = [1, 'k']
const refugio2 = [1, 'a']
const refugio3 = [11, 'k']
const refugio4 = [11, 'a']
const jogador1 = 1
const jogador2 = 2
let numero_jogador = 0;

//funcao que guarda a posição das peças
function posicao_pecas(){

    let soldado = {
        0:[coluna[4-1], linha[6-1]],
        1:[coluna[5-1], linha[6-1]],
        2:[coluna[7-1], linha[6-1]],
        3:[coluna[8-1], linha[6-1]],
        4:[coluna[6-1], linha[4-1]],
        5:[coluna[5-1], linha[5-1]],
        6:[coluna[6-1], linha[5-1]],
        7:[coluna[7-1], linha[5-1]],
        8:[coluna[5-1], linha[7-1]],
        9:[coluna[6-1], linha[7-1]],
        10:[coluna[7-1], linha[7-1]],
        11:[coluna[6-1], linha[8-1]]
    }

    let mercenario = {
        0:[coluna[1-1], linha[4-1]],
        1:[coluna[1-1], linha[5-1]],
        2:[coluna[1-1], linha[6-1]],
        3:[coluna[1-1], linha[7-1]],
        4:[coluna[1-1], linha[8-1]],
        5:[coluna[2-1], linha[6-1]],
        6:[coluna[4-1], linha[11-1]],
        7:[coluna[5-1], linha[11-1]],
        8:[coluna[6-1], linha[11-1]],
        9:[coluna[7-1], linha[11-1]],
        10:[coluna[8-1], linha[11-1]],
        11:[coluna[4-1], linha[1-1]],
        12:[coluna[5-1], linha[1-1]],
        13:[coluna[6-1], linha[1-1]],
        14:[coluna[7-1], linha[1-1]],
        15:[coluna[8-1], linha[1-1]],
        16:[coluna[6-1], linha[2-1]],
        17:[coluna[6-1], linha[10-1]],
        18:[coluna[10-1], linha[6-1]],
        19:[coluna[11-1], linha[4-1]],
        20:[coluna[11-1], linha[5-1]],
        21:[coluna[11-1], linha[6-1]],
        22:[coluna[11-1], linha[7-1]],
        23:[coluna[11-1], linha[8-1]],
    }

    let rei = [6, 'f']
    imprime_define_tabuleiro(soldado, mercenario,rei)
}



//funcao de impressao do tabuleiro
function imprime_define_tabuleiro(soldado, mercenario, rei){
    let pecas_tabuleiro = [["","","","","","","","","","",""],["","","","","","","","","","",""],["","","","","","","","","","",""],["","","","","","","","","","",""],["","","","","","","","","","",""],
    ["","","","","","","","","","",""],["","","","","","","","","","",""],["","","","","","","","","","",""],["","","","","","","","","","",""],["","","","","","","","","","",""],
    ["","","","","","","","","","",""],]
    //console.log(pecas_tabuleiro)
    for (let i = 0; i < linha.length; i++){
        let escrita = ""
        let k = 0
        let m = 0
        let j = 0
        for (j; j < coluna.length; j++){           
            for(k=0; k < 12; k++){
                if(soldado[k][0] == coluna[j] && soldado[k][1] == linha[i]){
                    pecas_tabuleiro[i][j] = "S"
                    k = 20
                    escrita += pecas_tabuleiro[i][j]  + "   "
                }
            }
            for(m=0; m < 24; m++){
                if(mercenario[m][0] == coluna[j] && mercenario[m][1] == linha[i]){
                    pecas_tabuleiro[i][j] = "M"
                    m = 50
                    escrita += pecas_tabuleiro[i][j]  + "   "
                }
            }
            if(rei[0] == coluna[i] && rei[1] == linha[j]){
                pecas_tabuleiro[i][j] = "R"
                escrita += pecas_tabuleiro[i][j]  + "   "
            }
            else if(refugio1[0] == coluna[i] && refugio1[1] == linha[j]){
                pecas_tabuleiro[i][j] = "X"
                escrita += pecas_tabuleiro[i][j]  + "   "
            }
            else if(refugio2[0] == coluna[i] && refugio2[1] == linha[j]){
                pecas_tabuleiro[i][j] = "X"
                escrita += pecas_tabuleiro[i][j]  + "   "
            }
            else if(refugio3[0] == coluna[i] && refugio3[1] == linha[j]){
                pecas_tabuleiro[i][j] = "X"
                escrita += pecas_tabuleiro[i][j]  + "   "
            }
            else if(refugio4[0] == coluna[i] && refugio4[1] == linha[j]){
                pecas_tabuleiro[i][j] = "X"
                escrita += pecas_tabuleiro[i][j]  + "   "
            }
            else if(k != 21 && m !=51){
                pecas_tabuleiro[i][j] = "-"
                escrita += pecas_tabuleiro[i][j]  + "   "
            }
              
        }
        escrita +=  "->" + linha[i]  
        console.log(escrita)
    }
    console.log("")
    console.log(coluna[0] + "  ", coluna[1] + "  ", coluna[2] + "  ", coluna[3] + "  ", coluna[4] + "  ", coluna[5] + "  ", coluna[6] + "  ", coluna[7] + "  ", coluna[8] + "  ", coluna[9] + " ", coluna[10])        

    regras_e_jogada(soldado, mercenario, rei, pecas_tabuleiro);
}

function regras_e_jogada(soldado,mercenario,rei, pecas_tabuleiro){
    
    /*console.log("\nJogador1 (R) "+
                "\nJogador2 (M)")
    */

    console.log("\nPecas capturadas")
    console.log("jogador (1): {" + "}")
    console.log("jogador (2): {" + "}")

    console.log("Digite o primeiro a jogar (1) ou (2)")
    /* inserir entrada */

    //verifica_peca = [esquerda, direita, cima, baixo]
    // 0 = sem jogada
    // 1 = jogada naquela direção
    let verifica_peca = [0, 0, 0, 0]

    //vendo as possiveis jogadas de cada jogador
    if(numero_jogador == 1){

    }  
    else if(numero_jogador == 2){

    }
    else{
        console.log("numero invalido!")
    }
}

posicao_pecas()