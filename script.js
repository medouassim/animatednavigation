var x = document.getElementById("toggle");
var container = document.getElementById('nav');
var lis = document.querySelectorAll('#nav ul li');
x.addEventListener('click',() => {
    lis.forEach(li => li.style.display = 'block');
    container.classList.toggle('active');
    if(!container.classList.contains('active')){
         setTimeout(function() {
            lis.forEach(li => li.style.display ='none')
        }, 700) 
    }
});
