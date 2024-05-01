const imageUrl = [
    './photos/1.jpg',
    './photos/2.jpg',
    './photos/3.jpg',
    './photos/4.jpg',
    './photos/5.jpg',
    './photos/6.jpg',
    './photos/7.jpg',
    './photos/8.jpg',
    './photos/9.jpg',
    './photos/10.jpg',
    './photos/11.jpg',
    './photos/12.jpg',
    './photos/13.jpg',
    './photos/14.jpg',
    './photos/15.jpg'];
    const imageContainer = document.getElementsById("image");
document.getElementById('button').addEventListener("click",(e)=>{
    imageContainer.innerHTML = '';
    for (let arr of imageUrl) {
        const img = document.createElement('img');
        img.src = arr;
        img.style.marginRight = '10px';
        imageContainer.appendChild(img);
    }
if(e.target.className === 'animal'){
   
}

})