function buscarInfo() {

    const nomeCientista = document.getElementById("select-cientista").value;

    fetch(`https://pt.wikipedia.org/api/rest_v1/page/summary/${nomeCientista}`)
        .then(response => response.json())
        .then(data => {

            const infoCientista = document.getElementById("info-cientista");
            infoCientista.innerHTML = `<h2>${nomeCientista}</h2> <p>${data.extract}</p>`;

            infoCientista.classList.add('ativo')
        })
}