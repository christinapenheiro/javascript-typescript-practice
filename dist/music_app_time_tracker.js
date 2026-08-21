"use strict";
// Problem 4 — Music App Listening Time Tracker
// Concepts: object types, array types, reduce(), function parameter and return types
// Function name must be: calculateTotalListeningTime
// Scenario
// A music streaming app wants to show users their yearly "Wrapped" summary — the total number of minutes they've listened to, based on an array of tracks they've played.
// Track Structure
// {
//     title: string;
//     minutes: number;
// }
// Task
// Create a function named calculateTotalListeningTime. The function should receive an array of tracks and return the total minutes listened.
// Requirements
// Properly type the track object.
// Properly type the array of tracks.
// Return the total as a number.
// An empty array should return 0.
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTotalListeningTime(tracks) {
    // write your code here
    const totalMinute = tracks.reduce((count, obj) => count + obj.minutes, 0);
    return totalMinute;
}
// const tracks = [
//     { title: "Blinding Lights", minutes: 3 },
//     { title: "Levitating", minutes: 4 },
//     { title: "Peaches", minutes: 3 }
// ];
// console.log(calculateTotalListeningTime(tracks))
// const tracks2 = [
//     { title: "Flowers", minutes: 3 },
//     { title: "Anti-Hero", minutes: 4 }
// ];
// console.log(calculateTotalListeningTime(tracks2))
//# sourceMappingURL=music_app_time_tracker.js.map