const formulariop = document.querySelector("form")
formulariop.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = new FormData(formulariop);
    //alert(nombre);
    debugger;
    fetch('https://cesde-f928b-default-rtdb.firebaseio.com/user.json',{
        method: 'POST',
        body: JSON.stringify ({
            address: document.getElementById('direccion').value,
            document: document.getElementById('documento').value,
            mail: document.getElementById('mail').value,
            name: document.getElementById('name').value,
            password: document.getElementById('password').value,
            phone: document.getElementById('telefono').value,
            surname: document.getElementById('surname').value,
                })
        
    })
    .then(data => data.json())
    .then(data => {
        console.log('success', data);

    })
    .catch(function(error){
        console.log('error', error);
    })

})