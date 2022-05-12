const formulariop = document.querySelector("form")
formulariop.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = new FormData(formulariop);
    //alert(nombre);
    
    fetch('https://cesde-f928b-default-rtdb.firebaseio.com/user.json',{
        method: 'POST',
        body: JSON.stringify ({
            address: "",
            document: "",
            mail: "",
            name: "",
            password: "",
            phone: "",
            surname: "",
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