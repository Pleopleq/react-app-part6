const express = require('express'); 
const path = require('path');
const cors = require('cors');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(process.env.PORT || 3000, () =>{
    console.log('Server up')
})