const express = require('express');
const bodyParser = require('body-parser');
const trainingController = require('./controllers/trainingController');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/')));

app.get('/', trainingController.getTrainingList);
app.get('/add', trainingController.getAddTrainingForm);
app.post('/add', trainingController.addTraining);
app.get('/edit/:id', trainingController.getEditTrainingForm);
app.post('/edit/:id', trainingController.editTraining);
app.post('/delete/:id', trainingController.deleteTraining); 
app.get('/reports', trainingController.getTrainingReports);


app.listen(3000, () => {
    console.log('Aplikacja działa na porcie 3000');
});