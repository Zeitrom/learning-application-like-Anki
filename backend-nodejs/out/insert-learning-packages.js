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
exports.insertLearningPackages = void 0;
// insertLearningPackages.ts
const models_1 = require("./models");
const insertLearningPackages = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Define the learning packages data
        const learningPackagesData = [
            {
                id: "1",
                title: "Learn TypeScript",
                description: "A course on TypeScript programming.",
                category: "Programming",
                targetAudience: "Developers",
                difficultyLevel: 15,
            },
            {
                id: "2",
                title: "Learn Node.js",
                description: "A comprehensive guide to Node.js development.",
                category: "Web Development",
                targetAudience: "Developers",
                difficultyLevel: 16,
            },
            {
                id: "3",
                title: "Learn HTML",
                description: "An introductory course on HTML.",
                category: "Web Development",
                targetAudience: "Beginners",
                difficultyLevel: 8,
            },
            {
                id: "4",
                title: "Learn Angular",
                description: "A hands-on tutorial for Angular framework.",
                category: "Web Development",
                targetAudience: "Developers",
                difficultyLevel: 18,
            },
        ];
        // Create instances of LearningPackage model and insert them into the database
        for (const packageData of learningPackagesData) {
            yield models_1.LearningPackage.create(packageData);
        }
        console.log('Learning packages inserted successfully');
    }
    catch (error) {
        console.error('Error inserting learning packages:', error);
    }
});
exports.insertLearningPackages = insertLearningPackages;
