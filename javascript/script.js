let menusBtn = document.getElementById('menu-icon')
let menus = document.querySelector('.rightheader');


console.log("hello")
console.log(menus)
console.log(menusBtn)


menusBtn.addEventListener('click', () => {
    menus.classList.toggle('menu-open');
});




let btn=document.getElementById('btn');
let hdr=document.querySelector('.header');



window.onscroll=function(){
if(scrollY>=100){
  hdr.style.position="fixed";
  hdr.style.backgroundColor="#0C1222"
  


  btn.style.display="block";
}else{
  btn.style.display="none"



    hdr.style.position="absolute";
    hdr.style.background="transparent"

}
}
btn.onclick=function(){
  scroll({
    top:0 ,
    left:0,
    behavior:"smooth" 
    
  })
  
}




