let modaal = document.querySelector('#modaalachtergrond');
let modaalvenster = document.querySelector('#modaalvenster');
let modaalinhoud = document.querySelector('#inhoud');
let modaalTrigger = document.querySelectorAll('.trigger');
let alleModalen = new Object();


const sluitModaal = () =>{
    modaalinhoud.innerHTML = "";
    modaal.parentNode.removeChild(modaal);
}

modaalvenster.addEventListener('click',(e) => {
    e.stopPropagation();
})

sluitknop.addEventListener('click',sluitModaal);
modaal.addEventListener('click',sluitModaal);

for( let i = 0; i <modaalTrigger.length; i++){
    let item = modaalTrigger[i].hash.substr(1);
alleModalen[item] = document.getElementById(item);
// een klik event toevoegen
    modaalTrigger[i].addEventListener('click',(e)=> {
        e.preventDefault();
        modaalinhoud.appendChild(alleModalen[item]);
        document.body.appendChild(modaal);
    })
}

for(elen in alleModalen){
    alleModalen[elen].parentNode.removeChild(alleModalen[elen]);
}


sluitModaal();

