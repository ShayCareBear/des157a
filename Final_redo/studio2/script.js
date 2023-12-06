(function(){

    window.addEventListener('load', function () {
        'use strict';
        const sliderContent = document.querySelector('.a');
    
        
        const sliderWidth = sliderContent.offsetWidth;
    
       
        const cloned = sliderContent.cloneNode(true);
        cloned.className = "b";
    
      
        document.querySelector('#slider').appendChild(cloned);
    
        let root = document.querySelector(':root');
    
     
        const endLeftPos = `-${sliderWidth}px`;    
        root.style.setProperty('--sliderwidth', endLeftPos);
    
       
        document.querySelector('#slider').classList.add("animate");
    });



    const trig =  document.querySelectorAll('#journals a');

    trig.forEach(function(eachtrig){
         eachtrig.addEventListener('click', overlayopen );

    });
    function overlayopen (){
        const thisoverlay = this.getAttribute('id');
        document.querySelector(`#ol-${thisoverlay}`).className="overlay showing"
        
        
        console.log(this.getAttribute('id'));
    };


    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.querySelector('.showing').className = 'overlay hidden';
        } });

        const overlays = document.querySelectorAll(".overlay");

        for (const eachoverlay of overlays) {
            eachoverlay.addEventListener('click', function (event) {
                event.preventDefault();
                document.querySelector('.showing').className = 'overlay hidden';
            });
        }
    

        const paperBtns = document.querySelectorAll('.paper');
        const paperSound = new Audio('sounds/paper.mp3');
       
        paperBtns.forEach(function(eachbtn){
       eachbtn.addEventListener('mousedown', function () {
        paperSound.play();
        console.log(paperSound.play)
       });
    });


 

})();