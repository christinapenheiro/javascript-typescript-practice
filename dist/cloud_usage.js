"use strict";
// Problem 9 — Cloud Storage Usage Tracker
// Concepts: union types, discriminated unions, type narrowing, object types, return types, conditional logic
// Function name must be: updateStorageUsage
// Scenario
// A cloud storage app, similar to Google Drive, tracks how much storage a user has used. Every action a user takes is either an upload or a delete.
// Upload Action
// {
//     type: "upload",
//     sizeMB: 500
// }
// Delete Action
// {
//     type: "delete",
//     sizeMB: 800
// }
// Task
// Create a function named updateStorageUsage. It should receive the current storage used (in MB) and an action, and return the new storage usage.
// Rules
// An upload increases the usage.
// A delete decreases the usage.
// Usage can never go below 0 — if a delete would take it below 0, the result should just be 0.
// TypeScript Requirement
// Represent the two possible action shapes using TypeScript's type system. The function should not accept arbitrary action types.
Object.defineProperty(exports, "__esModule", { value: true });
function updateStorageUsage(currentUsageMB, action) {
    // write your code here
    if (action.type === "delete") {
        if (currentUsageMB - action.sizeMB <= 0) {
            return 0;
        }
        return currentUsageMB - action.sizeMB;
    }
    return currentUsageMB + action.sizeMB;
}
// console.log(updateStorageUsage(2000, { type: "upload", sizeMB: 500 }))
// console.log(updateStorageUsage(2000, { type: "delete", sizeMB: 800 }))
// console.log(updateStorageUsage(300, { type: "delete", sizeMB: 1000 }))
//# sourceMappingURL=cloud_usage.js.map