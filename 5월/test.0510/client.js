const button = document.getElementById('button');
button.addEventListener('click', async () => {
  fetch("http://localhost:8000/pokemonData", {
    method : "GET"
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

  // const res = await fetch("http://localhost:8000/pokemondata");
  // const resData = await res.json();
  // console.log(resData);
})