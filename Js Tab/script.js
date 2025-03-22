const ul = document.querySelectorAll('ul')
const list = document.querySelectorAll('.list')
const desc = document.querySelectorAll(".desc")

//loop semua li/ list
list.forEach(function(l,index){
    l.addEventListener('click', function(){
        //kalo kita klik tab yang lain maka hilangkan tab active yang sebelumnya
        list.forEach(item => item.classList.remove('active'))
        //hide paragraf dulu
        desc.forEach(p => p.classList.remove ('displayed'))
        //tampilkan paragraf sesuai tab yang di klik
        desc[index].classList.add ('displayed')
        // saat klik tab maka tambahkan class active
    l.classList.add('active')
})
})


