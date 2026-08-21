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

// The final fee is calculated using: Final Fee = Unlock Fee + (Minutes × Cost per Minute)
// Task
// Create a function named calculateRentalFee. The function should receive a vehicle type and the rental duration in minutes, and return the calculated fee.
// TypeScript Requirement
// Create a union type so that only "scooter" | "ebike" | "moped" are accepted. This should be rejected by TypeScript: calculateRentalFee("bike", 20).
// Additional Challenge
// Consider what should happen when minutes is 0. Your function should still return a valid number based on your chosen interpretation of the pricing rules.




type VehicleType = "scooter" | "ebike" | "moped";
 
function calculateRentalFee(vehicle: VehicleType, minutes: number): number {
 
    // write your code here
    if(vehicle === "scooter"){
        return 10 + (2 * minutes)
    }
    else if(vehicle === "ebike"){
        return 15 + (3 * minutes)
    }

    return 25 + (5 * minutes)

}

// console.log(calculateRentalFee("scooter", 20))
// console.log(calculateRentalFee("ebike", 20))
// console.log(calculateRentalFee("moped", 20))
// console.log(calculateRentalFee("moped", 0))
