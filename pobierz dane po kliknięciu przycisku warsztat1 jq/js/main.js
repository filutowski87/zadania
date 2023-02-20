console.log('Ajax -Warsztat pobierz dane po kliknięciu przycisku');
 let btngetdata = document.getElementById('get-data');
 console.log(btngetdata);
const getData = () => {

    fetch("https://akademia108.pl/api/ajax/get-post.php")
        .then(res => res.json())
        .then(data =>{
           

         let pId = document.createElement('p');
         let pUserId = document.createElement('p');
         let pTiltle = document.createElement('p');
         let pBody = document.createElement('p');
         let hr = document.createElement('hr');

         pId.innerText = `post id: ${data.id}`;
         pUserId.innerText = `user Id: ${data.userId}`;
         pTiltle.innerText = `Title: ${data.title}`;
         pBody.innerText = `Body: ${data.body}`;


         document.body.appendChild(pId);
         document.body.appendChild(pUserId);
         document.body.appendChild(pTiltle);
         document.body.appendChild(pBody);
         document.body.appendChild(hr);


        console.log(data);
        
        })
        .catch(error => {
            console.error(error);
        });



 btngetdata.addEventListener('click', getData);


 
