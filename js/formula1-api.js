
/* =========================================
   ARENA 90 - API DE FÓRMULA 1
========================================= */

const url =
    "https://api.jolpi.ca/ergast/f1/2026/driverstandings.json";

async function carregarClassificacao() {

    const painel = document.getElementById("classificacao-pilotos");

    if (!painel) {
        return;
    }

    try {

        // 1. Solicita os dados da API
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error("Erro ao consultar a API");
        }

        // 2. Converte a resposta para JSON
        const dados = await resposta.json();

        // 3. Localiza a classificação dos pilotos
        const listas =
            dados.MRData.StandingsTable.StandingsLists;

        if (!listas || listas.length === 0) {
            painel.textContent =
                "Classificação ainda não disponível.";
            return;
        }

        const pilotos = listas[0].DriverStandings.slice(0, 5);

        // 4. Limpa a mensagem de carregamento
        painel.innerHTML = "";

        // 5. Cria um cartão para cada piloto
        pilotos.forEach(function(piloto) {

            const cartao = document.createElement("div");
            cartao.className = "classificacao__piloto";

            const nome =
                piloto.Driver.givenName + " " +
                piloto.Driver.familyName;

            const equipe =
                piloto.Constructors[0]?.name || "Equipe não informada";

            const posicao = document.createElement("span");
            posicao.className = "classificacao__posicao";
            posicao.textContent = piloto.position + "º";

            const informacoes = document.createElement("span");
            informacoes.textContent = nome + " — " + equipe;

            const pontos = document.createElement("span");
            pontos.className = "classificacao__pontos";
            pontos.textContent = piloto.points + " pontos";

            cartao.appendChild(posicao);
            cartao.appendChild(informacoes);
            cartao.appendChild(pontos);

            painel.appendChild(cartao);

        });

    } catch (erro) {

        console.error("Falha na API:", erro);

        painel.textContent =
            "Não foi possível carregar a classificação.";

    }

}

carregarClassificacao();

