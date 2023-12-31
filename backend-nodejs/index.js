const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Définissez vos routes ici
const LearningPackage = require('./LearningPackage');
const User = require('./Users'); 


app.get('/learningPackages', (req, res) => {
  LearningPackage.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving learning packages."
      });
    });
});

app.get('/users', (req, res) => {
    User.findAll()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.post('/users', (req, res) => {
    User.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.get('/users/:id', (req, res) => {
    User.findByPk(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.put('/users/:id', (req, res) => {
    User.update(req.body, {
        where: { userId: req.params.id }
    })
    .then(num => {
        if (num == 1) {
            res.send({ message: "User was updated successfully." });
        } else {
            res.send({ message: `Cannot update User with id=${req.params.id}. Maybe User was not found or req.body is empty!` });
        }
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

app.delete('/users/:id', (req, res) => {
    User.destroy({
        where: { userId: req.params.id }
    })
    .then(num => {
        if (num == 1) {
            res.send({ message: "User was deleted successfully!" });
        } else {
            res.send({ message: `Cannot delete User with id=${req.params.id}. Maybe User was not found!` });
        }
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
