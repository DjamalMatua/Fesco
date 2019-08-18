
var c = document.getElementById('each-artfact');
c.classList.remove('responsive');
var l = c.getElementsByClassName('image-control');
var r = Math.ceil(l.length / 4);

for (var m = 0; m < l.length; m++){
    l[m].classList.add('col-md-4');
}

//if(r > 1){
//    c.classList.add('responsive-4');
//} else if ((l.length % 4) == 1{
//    //c.classList.add('responsive-4');
//}else if ((l.length % 4) == 2{
//    //c.classList.add('responsive-4');
//}else if ((l.length % 4) == 3{
//    //c.classList.add('responsive-4');
//}else if ((l.length % 4) == 0{
//    //c.classList.add('responsive-4');
//}
