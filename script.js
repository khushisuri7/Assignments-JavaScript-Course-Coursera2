(function(){
    'use strict';

    let convertType="miles";
    const heading=document.querySelector('h1');
    const intro=document.querySelector('p');
    const ansDiv=document.getElementById('answer');
    const form=document.getElementById('convert');

 
    document.addEventListener('keydown',function(event){
        const key=event.code;
        if(key==='KeyK'){
            convertType='kilometers';
            heading.innerHTML="Kilometer to Miles Converter";
            intro.innerHTML="Type a number in kilometer and convert it into miles";
            
        }
        else  if(key==='KeyM'){
            convertType='miles';
            heading.innerHTML="Miles to Kilometer Converter";
            intro.innerHTML="Type a number in miles and convert it into kilometer";
        }
    });
    form.addEventListener('submit',function(event){
        event.preventDefault();
        const distance=parseFloat(document.getElementById('distance').value);
        if(distance){
            if(convertType=='miles'){
                const converted=(distance*1.609344).toFixed(3);
                answer.innerHTML=`${distance} miles converted to ${converted} kilometers`
            }
            else{
                const converted=(distance*0.621371192).toFixed(3);
                answer.innerHTML=`${distance} kilometers converted to ${converted} miles`
            }
            
        }
        else{
            answer.innerHTML="<h2>Please provide a number!!</h2>"
        }
    });

})();