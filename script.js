// Inicialização das variáveis de pontuação
let arvores = 0;
let agua = 0;
let energia = 0;

/**
 * Função para atualizar o placar na tela
 * @param {string} tipo - O tipo de ação sustentável clicada
 */
function adicionarImpacto(tipo) {
    if (tipo === 'arvores') {
        arvores += 1;
        document.getElementById('qtd-arvores').innerText = arvores;
    } else if (tipo === 'agua') {
        // Cada clique simula a economia de 50 litros de água
        agua += 50;
        document.getElementById('qtd-agua').innerText = agua;
    } else if (tipo === 'energia') {
        // Cada clique simula a geração de 5 kWh de energia solar
        energia += 5;
        document.getElementById('qtd-energia').innerText = energia;
    }
    
    // Adiciona um pequeno efeito visual de pulso no número atualizado
    efeitoPulso(tipo);
}

// Função bônus para dar um feedback visual ao usuário
function efeitoPulso(tipo) {
    let elementoId = '';
    if (tipo === 'arvores') elementoId = 'qtd-arvores';
    if (tipo === 'agua') elementoId = 'qtd-agua';
    if (tipo === 'energia') elementoId = 'qtd-energia';

    const elemento = document.getElementById(elementoId);
    elemento.style.transform = 'scale(1.2)';
    elemento.style.transition = 'transform 0.1s';
    
    setTimeout(() => {
        elemento.style.transform = 'scale(1)';
    }, 100);
}