const input = require("sync-input");
const STAFF_EXPENSES_PROMPT = `Staff expenses: \n`;
const OTHER_EXPENSES_PROMPT = `Other expenses: \n`;

const items = [
    {itemName: "Bubblegum", earnedAmount: 202},
    {itemName: "Toffee", earnedAmount: 118},
    {itemName: "Ice cream", earnedAmount: 2250},
    {itemName: "Milk chocolate", earnedAmount: 1680},
    {itemName: "Doughnut", earnedAmount: 1075},
    {itemName: "Pancake", earnedAmount: 80}
];

function logItems(itemList) {
    for (let item of itemList) {
        console.log(`${item.itemName}: $${item.earnedAmount}`);
    }
}

function logTotalIncome(itemList) {
    let totalIncome = itemList.reduce((sum, item) => sum + item.earnedAmount, 0);
    return totalIncome;
}

function getExpenses(prompt) {
    let expenses = input(prompt);
    return expenses;
}

function calculateNetIncome(totalIncome, staffExpenses, otherExpenses) {
    return totalIncome - staffExpenses - otherExpenses;
}

console.log(`Earned amount:`);
logItems(items);

let totalIncome = logTotalIncome(items);
console.log(`Income: ${totalIncome}`);

let staffExpenses = getExpenses(STAFF_EXPENSES_PROMPT);
let otherExpenses = getExpenses(OTHER_EXPENSES_PROMPT);

console.log(`Net income: $${calculateNetIncome(totalIncome, staffExpenses, otherExpenses)}`);