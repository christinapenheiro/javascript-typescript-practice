"use strict";
// Problem 2 — Smart Home WiFi Signal Status
// Concepts: function types, number, string, conditional logic, boundary conditions
// Function name must be: getSignalStatus
// Scenario
// A smart home app shows the WiFi signal strength of each connected device as a percentage. Rather than showing a raw number, the app wants to display a friendly status label.
// Task
// Create a function named getSignalStatus. The function receives the signal strength (0–100) and returns a status string.
// Status Rules
// Strength (%)
// Status
// 0–20
// "Weak"
// 21–50
// "Fair"
// 51–80
// "Good"
// 81–100
// "Excellent"
Object.defineProperty(exports, "__esModule", { value: true });
// Additional Requirement
// The function should return a string.
function getSignalStatus(strength) {
    // write your code here
    if (strength < 0 || strength > 100) {
        return "Invalid";
    }
    return strength >= 0 && strength <= 20 ? "Weak" : strength <= 50 ? "Fair" : strength <= 80 ? "Good" : "Excellent";
}
// console.log(getSignalStatus(10));
// console.log(getSignalStatus(35));
// console.log(getSignalStatus(65));
// console.log(getSignalStatus(95));
// console.log(getSignalStatus(20));
// console.log(getSignalStatus(21));
// console.log(getSignalStatus(80));
// console.log(getSignalStatus(81));
// console.log(getSignalStatus(-12));
// console.log(getSignalStatus(200));
//# sourceMappingURL=wifi_signal_status.js.map