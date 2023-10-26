(function (){
    'use strict';



const myForm = document.querySelector('#myform');
const  madLib = document.querySelector('#madLib');

myForm.addEventListener( 'submit' , function(event){
event.preventDefault();

const adjective1 = document.querySelector('#adjective1').value;
const noun1 = document.querySelector('#noun1').value;
const name1 = document.querySelector('#name1').value;
const noun2 = document.querySelector('#noun2').value;
const noun3 = document.querySelector('#noun3').value;
const verb1 = document.querySelector('#verb1').value;
const noun4 = document.querySelector('#noun4').value;
const verb2 = document.querySelector('#verb2').value;
const adjective2 = document.querySelector('#adjective2').value;
const name2 = document.querySelector('#name2').value;
const name3 = document.querySelector('#name3').value;
const MOC = document.querySelector('#MOC').value;
const VG = document.querySelector('#VG').value;



let myText = '' ;


myText = `<p>
Thank you for coming to this ${adjective1} zoom meeting about ${noun1}. Im happy everyone could be here except you  ${name1}. Anyway, I emailed you all the links to discuss ${noun2}. As I'm sure you are aware the ${noun3} have been ${verb1},. Because of that the ${noun4}, are struggling to ${verb2}. This is an urgent ${adjective2} problem.
</p>
<p>
Any one have any solutions? No not you ${name2}. How about you ${name3}, that's calling in from ${MOC}. Any thoughts? Hello? Seems they have their webcam off hmm.. Well while we wait for them to get back id appreciate it if you all stopped playing ${VG}, yes you and you I can see your online profiles. 

</p> `

madLib.innerHTML = myText;

document.getElementById('overlay').className ='showing';

});

//exist code here 

document.querySelector('.close').addEventListener('click', function(event){

    event.preventDefault();
    document.getElementById('overlay').className = 'hidden';

    document.querySelector('#adjective1').value= '';
    document.querySelector('#noun1').value= '';
    document.querySelector('#name1').value= '';
    document.querySelector('#noun2').value= '';
    document.querySelector('#noun3').value= '';
    document.querySelector('#verb1').value= '';
    document.querySelector('#noun4').value= '';
    document.querySelector('#verb2').value= '';
    document.querySelector('#adjective2').value= '';
    document.querySelector('#name2').value= '';
    document.querySelector('#name3').value= '';
    document.querySelector('#MOC').value= '';
    document.querySelector('#VG').value= '';
});

document.addEventListener('keydown', function(event){
    if(event.key === 'Escape'){
        document.getElementById('overlay').className = 'hidden';

    document.querySelector('#adjective1').value= '';
    document.querySelector('#noun1').value= '';
    document.querySelector('#name1').value= '';
    document.querySelector('#noun2').value= '';
    document.querySelector('#noun3').value= '';
    document.querySelector('#verb1').value= '';
    document.querySelector('#noun4').value= '';
    document.querySelector('#verb2').value= '';
    document.querySelector('#adjective2').value= '';
    document.querySelector('#name2').value= '';
    document.querySelector('#name3').value= '';
    document.querySelector('#MOC').value= '';
    document.querySelector('#VG').value= '';
    }
})
})();