const Training = require('../models/Training');

let trainings = [];

exports.getTrainingList = (req, res) => {
    res.render('index', { trainings: trainings });
};

exports.getAddTrainingForm = (req, res) => {
    res.render('addTraining');
};

exports.addTraining = (req, res) => {
    const { name, type, intensity } = req.body;
    const newTraining = new Training(name, type, intensity);
    trainings.push(newTraining);
    res.redirect('/');
};

exports.getEditTrainingForm = (req, res) => {
    const trainingId = req.params.id;
    const training = trainings[trainingId];
    res.render('editTraining', { training: training, trainingId: trainingId }); 
};
exports.editTraining = (req, res) => {
    const trainingId = req.params.id;
    const { name, type, intensity } = req.body;
    trainings[trainingId] = new Training(name, type, intensity);
    res.redirect('/');
};
exports.getDeleteTrainingForm = (req, res) => {
    console.log('some');
    const trainingId = req.params.id;
    res.render('deleteTraining', { trainingId: trainingId });
};
exports.deleteTraining = (req, res) => {
    console.log(req.params.id);
    const trainingId = req.params.id;
    trainings.splice(trainingId, 1)
    res.redirect('/');
};
