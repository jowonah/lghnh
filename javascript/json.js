function index(){ 

    fetch("./javascript/data.json")
    .then(res => res.json() )
    .then(data => callback(data) );

        const popup = document.querySelector('.popup');
        const elLi = document.querySelectorAll('.ideo > li');

        function callback(data){
            let tagList='';

            for(let i=0; i<elLi.length; i++){
                elLi[i].addEventListener('click',function(){
                    popup.style = 'display:flex';
                    dataChange(i);
                });
            }
            function dataChange(i){
                title = data.work[i].title;
                photo = data.work[i].photo;

                tagList =`<div><img src="${photo}"></div>`;
                popup.innerHTML = tagList;
            }
           
        }
         popup.addEventListener('click',function(){
                popup.style = 'display:none';
                
            })
}
window.onload = index;