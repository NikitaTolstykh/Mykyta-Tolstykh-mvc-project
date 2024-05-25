const Training = require('../models/Training');

let trainings = [];

exports.getTrainingList = (req, res) => {
    res.render('index', { trainings: trainings });
};

exports.getAddTrainingForm = (req, res) => {
    res.render('addTraining');
};

exports.addTraining = (req, res) => {
    try {
        const { name, type, intensity } = req.body;
        const newTraining = new Training(name, type, intensity);
        trainings.push(newTraining);
        res.redirect('/');
    } catch (error) {
        console.error('Error adding training:', error.message);
        res.status(400).send(`Error adding training: ${error.message}`);
    }
};

exports.getEditTrainingForm = (req, res) => {
    const trainingId = req.params.id;
    const training = trainings[trainingId];
    res.render('editTraining', { training: training, trainingId: trainingId });
};

exports.editTraining = (req, res) => {
    try {
        const trainingId = req.params.id;
        const { name, type, intensity } = req.body;
        const updatedTraining = new Training(name, type, intensity);
        trainings[trainingId] = updatedTraining;
        res.redirect('/');
    } catch (error) {
        console.error('Error editing training:', error.message);
        res.status(400).send(`Error editing training: ${error.message}`);
    }
};

exports.getDeleteTrainingForm = (req, res) => {
    const trainingId = req.params.id;
    res.render('deleteTraining', { trainingId: trainingId });
};

exports.deleteTraining = (req, res) => {
    const trainingId = req.params.id;
    trainings.splice(trainingId, 1);
    res.redirect('/');
};

exports.getTrainingReports = (req, res) => {
    res.render('reports', { trainings: trainings });
};
