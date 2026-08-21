"use strict";
// Problem 1 — Gaming Age Rating Checker
// Concepts: function parameter types, return types, string, conditional logic
// Function name must be: getAgeRatingAccess
// Scenario
// A gaming platform, similar to Steam or the PlayStation Store, needs to determine which age-rating category of games a user is allowed to access, based on their age.
// Task
// Create a function named getAgeRatingAccess. The function should receive the user's age and return the highest age-rating category they can access.
// Rating Rules
// Age
// Access Level
// Below 7
// "E (Everyone)"
// 7–12
// "E10+ (Everyone 10+)"
// 13–16
// "T (Teen)"
// 17 or above
// "M (Mature)"
Object.defineProperty(exports, "__esModule", { value: true });
// Function Requirement
// Accept the age as a number.
// Return the access level as a string.
// Correctly handle all age ranges.
function getAgeRatingAccess(age) {
    // write your code here
    return age > 0 && age < 7 ? "E (Everyone)" : age <= 12 ? "E10+ (Everyone 10+)" : age <= 16 ? "T (Teen)" : age >= 17 ? "M (Mature)" : "Invalid";
}
console.log(getAgeRatingAccess(5));
console.log(getAgeRatingAccess(10));
console.log(getAgeRatingAccess(15));
console.log(getAgeRatingAccess(20));
console.log(getAgeRatingAccess(-1));
console.log(getAgeRatingAccess(0));
//# sourceMappingURL=rating_checker.js.map