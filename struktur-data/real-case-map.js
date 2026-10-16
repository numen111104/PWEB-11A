const userA = { id: 1, name: "Rizky" };
const userB = { id: 2, name: "Zubair" };

const userC = { id: 3, name: "Dihyah" };

const userD = { id: 4, name: "Dimas" };

const sessions = new Map();

sessions.set(userA, "Authenticated");
sessions.set(userB, "Guest");

console.log(sessions);
sessions.set(userC, "Guest");
console.log(sessions.has(userC));

console.log(sessions.get(userB));
const nameZubair = userB.name;
console.log(nameZubair);

sessions.set(userD, { 1: "Authenticated", 2: "Guest" });
sessions.get(userD);
console.log(sessions);
sessions.get(userD);

// spread operator
