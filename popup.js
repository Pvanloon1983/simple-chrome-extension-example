const btn = document.getElementById('btn');

const changeText = () => {
  document.getElementById('content').innerText = 'Smile!';
}

btn.addEventListener('click', changeText);

