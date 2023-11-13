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


    (function () {
        'use strict';
    
    
        const container = document.querySelector('#container');
    
    
        const hotspots = document.querySelectorAll('#container div');
    
    
        const contIMG = document.querySelector('#container img');
    
    
    
    
        hotspots.forEach(function(eachspot){
            eachspot.addEventListener('mouseover', zoomPhoto);
            eachspot.addEventListener('mouseout', function(){
                contIMG.className= 'start';
            });
        });
    
    
        function zoomPhoto(event){
            const thisCorner = event.target.id;
            console.log(thisCorner);
            switch(thisCorner){
                case 'topleft': contIMG.className ='topleft';break;
                case 'topright': contIMG.className ='topright';break;
                case 'bottomleft': contIMG.className ='bottomleft';break;
                case 'bottomright': contIMG.className ='bottomright';break;
                case 'bottomleft': contIMG.className ='bottomleft';break;
                case 'center': contIMG.className ='center';break;
            }
        }
    
    
    })();

    const trig =  document.querySelectorAll('#journals a');

    trig.forEach(function(eachtrig){
         eachtrig.addEventListener('click', overlayopen );

    });
    function overlayopen (){
        const thisoverlay = this.getAttribute('id');
        document.querySelector(`#ol-${thisoverlay}`).className="overlay showing"
        
        
        console.log(this.getAttribute('id'));
    };

    const closeBtns = document.querySelectorAll('.close');

    for (const eachBtn of closeBtns) {
        eachBtn.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('.showing').className = 'overlay hidden';
        });
    }


    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.querySelector('.showing').className = 'overlay hidden';
 } });

 

})();