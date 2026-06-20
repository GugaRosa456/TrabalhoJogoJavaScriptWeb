let pontos = 0;
let valorDoClique = 1;
let totalUpgrades = 0;
let jogoFinalizado = false;

bola.addEventListener("click", () => {
    if (jogoFinalizado) return;

    pontos = pontos + valorDoClique;
    Pontos.innerText = "PONTOS: " + pontos.toFixed(1);
    bola.classList.add("chutar");

    if (pontos >= 500) {
        jogoFinalizado = true;
        alert("Parabéns! Você alcançou 500 pontos e ganhou o jogo!");
    }

});

 bola.addEventListener("animationend", () => {
    bola.classList.remove("chutar");
});

function comprarUpgrade(elementoJogador, preco, bonusClique) {
    if (jogoFinalizado) 
        return;

    preco = parseFloat(preco);
    bonusClique = parseFloat(bonusClique);

    if (pontos >= preco) {
        pontos = pontos - preco;
        if (bonusClique === 0.4) {
            valorDoClique = valorDoClique + 0.4;
        } else {
            valorDoClique = valorDoClique + 1;
        }
        totalUpgrades = totalUpgrades + 1;

      
        Pontos.innerText = "PONTOS: " + pontos.toFixed(1);
        ValorClique.innerText = "VALOR DO CLIQUE: " + valorDoClique.toFixed(1);
        Upgrades.innerText = "UPGRADES: " + totalUpgrades;

        elementoJogador.classList.add("comprado");
    } else {
        alert("Você não tem pontos suficientes!");
    }
}