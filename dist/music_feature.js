"use strict";
// Problem 6 — Music App Feature Access
// Concepts: union types, literal types, function parameter types, type safety
// Function name must be: canAccessOfflineMode
// Scenario
// A music streaming app has three subscription tiers: free, pro, and premium. Only pro and premium subscribers are allowed to download songs for offline listening.
// Task
// First create a union type Tier, then create a function named canAccessOfflineMode that receives a valid Tier and returns whether that tier can use offline mode.
// Rules
// Tier
// Offline Access?
// free
// false
// pro
// true
// premium
// true
Object.defineProperty(exports, "__esModule", { value: true });
function canAccessOfflineMode(tier) {
    // write your code here
    return tier === "premium" || tier === "pro" ? true : false;
}
// console.log(canAccessOfflineMode("free"))
// console.log(canAccessOfflineMode("pro"))
// console.log(canAccessOfflineMode("premium"))
//# sourceMappingURL=music_feature.js.map