// 1. Nested if...else Statements:
let age = prompt("Enter your age:");
let isStudent = prompt("Are you a student? (yes/no)").toLowerCase();

let ticketPrice;

if (age < 12) {
    ticketPrice = 5;
} else if (age >= 12 && age <= 18 && isStudent === "yes") {
    ticketPrice = 8;
} else if (age >= 12 && age <= 18 && isStudent === "no") {
    ticketPrice = 10;
} else {
    ticketPrice = 12;
}

alert("Ticket Price: $" + ticketPrice);