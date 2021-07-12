const container = document.getElementById('container');

for(let i = 0; i < 16; i+=1){
  const image = document.createElement('img');
  const imgContainer = document.createElement('div');
  imgContainer.setAttribute('class', 'img-container');
  image.setAttribute('class', 'image');
  image.src = 'images/pic' + (i + 1) + '.jpg'
  imgContainer.appendChild(image);
  container.appendChild(imgContainer);

}

