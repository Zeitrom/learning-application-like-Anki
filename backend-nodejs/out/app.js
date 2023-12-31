"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = require("./models"); // Adjust the import path as needed.
const cors_1 = __importDefault(require("cors"));
// sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
//   insertLearningPackages();
//   insertLearningFacts();
// });
const app = (0, express_1.default)();
const port = 3000;
// Middleware to parse JSON request bodies
app.use(express_1.default.json());
// Connect to angular frontend
app.use((0, cors_1.default)());
// Route to get all LearningPackages
app.get('/api/package', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const learningPackages = yield models_1.LearningPackage.findAll();
        res.status(200).json(learningPackages);
    }
    catch (error) {
        console.error('Error fetching LearningPackages:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Route to get a specific LearningPackage by ID
app.get('/api/package/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const learningPackage = yield models_1.LearningPackage.findByPk(id);
        if (learningPackage) {
            res.status(200).json(learningPackage);
        }
        else {
            res.status(404).json({ error: `LearningPackage not found for ID: ${id}` });
        }
    }
    catch (error) {
        console.error('Error fetching LearningPackage:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Route to create a new LearningPackage
app.post('/api/package', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPackageData = req.body; // Assuming you send JSON data in the request body
    try {
        const newPackage = yield models_1.LearningPackage.create(newPackageData);
        res.status(201).json(newPackage);
    }
    catch (error) {
        console.error('Error creating LearningPackage:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Route to update an existing LearningPackage by ID
app.put('/api/package/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updatedPackageData = req.body; // Assuming you send JSON data in the request body
    try {
        const [updatedCount] = yield models_1.LearningPackage.update(updatedPackageData, {
            where: { id },
        });
        if (updatedCount > 0) {
            const updatedPackage = yield models_1.LearningPackage.findByPk(id);
            res.status(200).json(updatedPackage);
        }
        else {
            res.status(404).json({ error: `LearningPackage not found for ID: ${id}` });
        }
    }
    catch (error) {
        console.error('Error updating LearningPackage:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Route to get summaries of all LearningPackages (only id and title)
app.get('/api/package-summaries', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const summaries = yield models_1.LearningPackage.findAll({
            attributes: ['id', 'title'],
        });
        res.status(200).json(summaries);
    }
    catch (error) {
        console.error('Error fetching LearningPackage summaries:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
app.get('/api/liveness', (req, res) => {
    res.status(200).json({ message: 'OK' });
});
// Route to get LearningPackage summaries with filtering
// app.get('/api/packagesummaries/search', async (req, res) => {
//   const { title, description, tag } = req.query as {
//     title: string | undefined;
//     description: string | undefined;
//     tag: string | undefined;
//   };
//   try {
//     const filteredPackages = await LearningPackage.findAll({
//       where: {
//         title: title ? { [sequelize.Op.iLike]: `%${title}%` } : undefined,
//         description: description ? { [sequelize.Op.iLike]: `%${description}%` } : undefined,
//         category: tag ? { [sequelize.Op.iLike]: `%${tag}%` } : undefined,
//       },
//       attributes: ['id', 'title'],
//     });
//     res.status(200).json(filteredPackages);
//   } catch (error) {
//     console.error('Error filtering LearningPackages:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
// Routes for LearningFact
app.get('/api/facts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allLearningFacts = yield models_1.LearningFact.findAll();
        res.status(200).json(allLearningFacts);
    }
    catch (error) {
        console.error('Error fetching LearningFacts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Route to get all LearningFacts for a given package
app.get('/api/package/:id/fact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const learningFacts = yield models_1.LearningFact.findAll({
            where: { learningPackageId: id },
        });
        res.status(200).json(learningFacts);
    }
    catch (error) {
        console.error('Error fetching LearningFacts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Route to get a specific LearningFact within a given package
app.get('/api/package/:id/fact/:factId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, factId } = req.params;
    try {
        const learningFact = yield models_1.LearningFact.findOne({
            where: { id: factId, learningPackageId: id },
        });
        if (learningFact) {
            res.status(200).json(learningFact);
        }
        else {
            res.status(404).json({ error: `LearningFact not found for ID: ${factId}` });
        }
    }
    catch (error) {
        console.error('Error fetching LearningFact:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Route to create and add a new Fact to a given package
app.post('/api/package/:id/fact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const newFactData = req.body; // Assuming you send JSON data in the request body
    newFactData.learningPackageId = id; // Set the learningPackageId
    try {
        const newFact = yield models_1.LearningFact.create(newFactData);
        res.status(201).json(newFact);
    }
    catch (error) {
        console.error('Error creating LearningFact:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Route to update an existing Fact of a given package
app.put('/api/package/:id/fact/:factId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, factId } = req.params;
    const updatedFactData = req.body; // Assuming you send JSON data in the request body
    try {
        const [updatedCount] = yield models_1.LearningFact.update(updatedFactData, {
            where: { id: factId, learningPackageId: id },
        });
        if (updatedCount > 0) {
            const updatedFact = yield models_1.LearningFact.findByPk(factId);
            res.status(200).json(updatedFact);
        }
        else {
            res.status(404).json({ error: `LearningFact not found for ID: ${factId}` });
        }
    }
    catch (error) {
        console.error('Error updating LearningFact:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Route to delete or mark as disabled an existing Fact of a given package
app.delete('/api/package/:id/fact/:factId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, factId } = req.params;
    try {
        const deletedCount = yield models_1.LearningFact.destroy({
            where: { id: factId, learningPackageId: id },
        });
        if (deletedCount > 0) {
            res.status(204).end();
        }
        else {
            res.status(404).json({ error: `LearningFact not found for ID: ${factId}` });
        }
    }
    catch (error) {
        console.error('Error deleting LearningFact:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Not CRUD api routes
// Start a learning session:
app.post('/api/package/:id/start-session', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // Implement the logic to start a learning session for the specified package here.
        // You can return relevant session data or the next learning fact to study.
        // Example: const nextLearningFact = await getNextLearningFact(id);
        res.status(200).json( /* Return relevant data or nextLearningFact */);
    }
    catch (error) {
        console.error('Error starting a learning session:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Answer to one LearningFact:
app.post('/api/package/:id/fact/:factId/answer', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, factId } = req.params;
    const userAnswerData = req.body; // Include user's answer and other relevant data
    try {
        // Implement the logic to save user's answer and compute the next review date here.
        // Example: const result = await saveUserAnswer(id, factId, userAnswerData);
        res.status(200).json( /* Return relevant result or updated fact data */);
    }
    catch (error) {
        console.error('Error saving user answer:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// End a learning session:
app.post('/api/package/:id/end-session', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // Implement the logic to end the learning session and provide a summary.
        // Example: const sessionSummary = await endLearningSession(id);
        res.status(200).json( /* Return relevant session summary or data */);
    }
    catch (error) {
        console.error('Error ending a learning session:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
