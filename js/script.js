fetch('https://forbes400.onrender.com/api/forbes400/')
.then(response => response.json())
.then(data => console.log(data))