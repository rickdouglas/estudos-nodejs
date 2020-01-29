const express = require('express'); // importa o express
const app = express();

app.get('/', (rec, res)=>{
	res.send('Hello from the other side motherfucker !!!');
});

app.listen(3001);