fetch('menu.html')
    .then(function(response) {
        return response.text();

    })
    .then(function(data){
        document.querySelector('#menu').innerHTML = data;
    })
    .catch(function(error){
        console.error('Hata:', error)
    });