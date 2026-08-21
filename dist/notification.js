"use strict";
// Problem 8 — Notification Center Renderer
// Concepts: union types, optional properties, type narrowing, discriminated unions, object types
// Function name must be: renderNotification
// Scenario
// A social app's notification center receives two kinds of notifications: a like notification (someone liked your post) and a system notification (an announcement from the app). Each needs to be rendered as a different message.
// Like Notification
// {
//     type: "like",
//     fromUser: "Aisha"
// }
// System Notification
// {
//     type: "system",
//     message: "Your subscription is expiring soon.",
//     actionUrl: "/billing"
// }
// The actionUrl field is optional — a system notification may or may not include it.
// Task
// Create a function named renderNotification. The function should receive either a like notification or a system notification and return the rendered message string.
// Rules
// A like notification renders as: "<fromUser> liked your post."
// A system notification renders as: "System: <message>"
// If a system notification has an actionUrl, append " (Tap to view)" to the end of the message.
// TypeScript Requirement
// Use a discriminated union (based on the type field) so TypeScript can correctly narrow between the two notification shapes.
Object.defineProperty(exports, "__esModule", { value: true });
function renderNotification(notification) {
    // write your code here
    if (notification.type === "system") {
        if ("actionUrl" in notification) {
            return `System: ${notification.message} (Tap to view)`;
        }
        return `System: ${notification.message}`;
    }
    return `${notification.fromUser} liked your post.`;
}
// console.log(renderNotification({ type: "like", fromUser: "Aisha" }))
// console.log(renderNotification({ type: "system", message: "Maintenance complete." }))
// console.log(renderNotification({ type: "system", message: "Your subscription is expiring soon.", actionUrl: "/billing" }))
//# sourceMappingURL=notification.js.map