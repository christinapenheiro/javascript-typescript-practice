"use strict";
// Problem 5 — Esports Tournament Player Stats
// Concepts: nested arrays, object types, reduce(), return object types, conditional logic
// Function name must be: getPlayerStats
// Scenario
// A tournament platform stores each player's match scores in an array. Organizers want a quick summary with the player's name, average score, and rank tier. A player is ranked MVP if their average score is at least 80, otherwise Rookie.
// Player Structure
// {
//     name: string;
//     scores: number[];
// }
// Task
// Create a function named getPlayerStats. The function should receive a player object, calculate the average of all scores, determine the rank, and return a new object containing name, average, and rank.
// Edge Case
// Think about what your function should do if the scores array is empty.
// TODO: define a type for a player
Object.defineProperty(exports, "__esModule", { value: true });
function getPlayerStats(player) {
    // write your code here
    const scoreTotal = player.scores.reduce((count, obj) => count + obj);
    const average = scoreTotal / player.scores.length;
    let rank = "Rookie";
    if (average >= 80) {
        rank = "MVP";
    }
    return {
        name: player.name,
        average,
        rank,
    };
}
// console.log(getPlayerStats({
//     name: "Nova",
//     scores: [90, 85, 95, 80]
// }))
// console.log(getPlayerStats({
//     name: "Zex",
//     scores: [60, 55, 70, 50]
// }))
//# sourceMappingURL=player_stats.js.map