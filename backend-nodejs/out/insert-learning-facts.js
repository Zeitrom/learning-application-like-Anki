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
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertLearningFacts = void 0;
const models_1 = require("./models"); // Import the LearningFact model
const insertLearningFacts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Define the learning facts data
        const learningFactsData = [
            {
                id: "1",
                content: "TypeScript is a statically typed superset of JavaScript.",
                creationDate: new Date(),
                learningPackageId: "1", // Reference to the learning package ID
            },
            {
                id: "2",
                content: "Node.js allows server-side JavaScript development.",
                creationDate: new Date(),
                learningPackageId: "2",
            },
            {
                id: "3",
                content: "HTML stands for Hypertext Markup Language.",
                creationDate: new Date(),
                learningPackageId: "3",
            },
            {
                id: "4",
                content: "Angular is a popular front-end framework.",
                creationDate: new Date(),
                learningPackageId: "4",
            },
        ];
        for (const factData of learningFactsData) {
            yield models_1.LearningFact.create(factData);
        }
        console.log('Learning packages inserted successfully');
    }
    catch (error) {
        console.error('Error inserting learning packages:', error);
    }
});
exports.insertLearningFacts = insertLearningFacts;
// Call the function to insert learning facts when needed
(0, exports.insertLearningFacts)();
