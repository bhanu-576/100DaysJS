const gallery = document.querySelectorAll('img');
document.getElementById('button').addEventListener("click",(e)=>{
   filterSearch(e.target.className)

})

function filterSearch(value){
    gallery.forEach(curr=>{
        if(value === 'all'){
            curr.style.display = 'inline-block'
        }else{
        if(curr.className === value){
            curr.style.display = 'inline-block';
        } else {
            curr.style.display = 'none';
        }
    }

    })

}