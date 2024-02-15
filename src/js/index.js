function obterConselho() { 
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            
            const conselhoParagrafo = document.getElementById('conselho');
            conselhoParagrafo.textContent = data.slip.advice;
        })
        .catch(error => {
            console.error('Erro ao obter conselho:', error);
        });
}