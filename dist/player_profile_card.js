"use strict";
// Problem 3 — Esports Player Profile Card
// Concepts: object types, type/interface, function parameter typing, return types, template literals
// Function name must be: formatPlayerCard
// Scenario
// An esports tournament platform stores basic information about each registered player. The platform needs a function that turns that structured data into a readable profile card summary. A player contains username, level, and region.
// Task
// First define an appropriate TypeScript type or interface for the player. Then create a function named formatPlayerCard that receives a player object and returns a formatted sentence.
// Requirements
// Accept a properly typed player object.
// Return a string.
// Use the values from the object rather than hard-coding the result.
Object.defineProperty(exports, "__esModule", { value: true });
function formatPlayerCard(player) {
    // write your code here
    return `${player.username} is a Level ${player.level} player from ${player.region}.`;
}
// console.log(formatPlayerCard({
//     username: "ShadowByte",
//     level: 42,
//     region: "Asia"
// }))
//# sourceMappingURL=player_profile_card.js.map