"use strict";
// Problem 10 — EV Scooter Rental Fee Calculator
// Concepts: union types, function parameter types, return types, type narrowing, object-based configuration, conditional logic
// Function name must be: calculateRentalFee
// Scenario
// A micromobility rental app offers three vehicle types: scooter, e-bike, and moped. The rental fee depends on the vehicle type and how many minutes it was rented for.
// Pricing
// Vehicle
// Unlock Fee
// Cost per Minute
// scooter
// 10
// 2
// ebike
// 15
// 3
// moped
// 25
// 5
Object.defineProperty(exports, "__esModule", { value: true });
function calculateRentalFee(vehicle, minutes) {
    // write your code here
    if (vehicle === "scooter") {
        return 10 + (2 * minutes);
    }
    else if (vehicle === "ebike") {
        return 15 + (3 * minutes);
    }
    return 25 + (5 * minutes);
}
// console.log(calculateRentalFee("scooter", 20))
// console.log(calculateRentalFee("ebike", 20))
// console.log(calculateRentalFee("moped", 20))
// console.log(calculateRentalFee("moped", 0))
//# sourceMappingURL=free_calculator.js.map