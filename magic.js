var test = document.querySelector('.second-cards');

window.addEventListener('scroll', function(){
    var scroll = this.scrollY;
    if(scroll > 810){
        test.style.opacity = '1';
        test.style.transition = '1s';
        test.style.left = '2%';        
    }else{
        test.style.opacity = '0';
        test.style.transition = '1s';
        test.style.left = '-5%'; 
    }
})


var secondTest = document.querySelector('.cards-3');

window.addEventListener('scroll', function(){
    var scroll = this.scrollY;
    if(scroll > 1300){
        secondTest.style.opacity = '1';
        secondTest.style.transition = '1s';
        secondTest.style.left = '0%';        
    }else{
        secondTest.style.opacity = '0';
        secondTest.style.transition = '1s';
        secondTest.style.left = '-5%'; 
    }
})