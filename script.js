let pontos = 0;
let valorDoClique = 1;
let totalUpgrades = 0;
let jogoFinalizado = false;

const txtPontos = document.getElementById("Pontos");
const txtValorClique = document.getElementById("ValorClique");
const txtUpgrades = document.getElementById("Upgrades");
const bola = document.getElementById("bola");

bola.addEventListener("click", () => {
    if (jogoFinalizado) 
        return;

    pontos += valorDoClique;
    txtPontos.innerText = "PONTOS: " + pontos.toFixed(1);

    bola.classList.add("chutar");

    setTimeout(() => {
        bola.classList.remove("chutar");
    }, 500);

    if (pontos >= 500) {
        jogoFinalizado = true;
        alert("Parabéns! Você alcançou 500 pontos e ganhou o jogo!");
    }
});

function comprarUpgrade(elementoJogador) {
    if (jogoFinalizado) 
        return;

    let preco = parseFloat(elementoJogador.getAttribute("data-preco"));
    let bonusClique = parseFloat(elementoJogador.getAttribute("data-clique"));

    if (pontos >= preco) {
        pontos -= preco;
        
        if (bonusClique === 0.4) {
            valorDoClique += 0.4;
        } else {
            valorDoClique += 1;
        }

        totalUpgrades += 1;

      
        Pontos.innerText = "PONTOS: " + pontos.toFixed(1);
        ValorClique.innerText = "VALOR DO CLIQUE: " + valorDoClique.toFixed(1);
        Upgrades.innerText = "UPGRADES: " + totalUpgrades;

        elementoJogador.classList.add("comprado");
    } else {
        alert("Você não tem pontos suficientes!");
    }
}