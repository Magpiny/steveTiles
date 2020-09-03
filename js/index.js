

   //Changing the backgroundColor using a button
   

   function darkMode(){
     let cbg = document.querySelector('body');
     cbg.style.backgroundColor='black';
     
       let bgc1 = document.querySelector('.header');
       bgc1.style.backgroundColor='#000';
       bgc1.style.color='#fff';
       
       let bgc2 = document.querySelector('.row11');
       bgc2.style.backgroundColor='#000';
       bgc2.style.color='#fff';
       
       let bgc3 = document.querySelector('.footer');
       bgc3.style.backgroundColor='#000';
       bgc3.style.color = '#fff';
       
            }
            
  let butt = document.querySelector('#butt');

   butt.addEventListener('click', darkMode);

  

