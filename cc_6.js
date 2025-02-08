// Task 1 Function Declaration, Scenario: Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold) {
   let profit = (sellingPrice - costPrice) * unitsSold;
   console.log(`Total Profit: $${profit}`);
};  //calculate total profit

calculateProfit(20, 30, 100);   //Test Data
calculateProfit(50, 70, 200);   //Test Data

// Task 2 Function Expression, Scenario: Sales Tax Computation

function calculateSalesTax(amount, taxRate) {
    let salesTax = amount * taxRate;
    let roundedSalesTax = Math.floor(salesTax);
    console.log(`Sales Tax: $${roundedSalesTax}`);  
};  //calculate sales tax

calculateSalesTax(100, 0.07);  //Test Data
calculateSalesTax(500, 0.1);  //Test Data

// Task 3 Arrow Function, Scenario: Employee Bonus Calculation

let calculateBonus = (salary, performanceRating) => {
    let bonus = 0;

    // Determine bonus based on performance rating
    if (performanceRating === "Excellent") {
        bonus = salary * 0.20;
    } else if (performanceRating === "Good") {
        bonus = salary * 0.10;
    } else if (performanceRating === "Average") {
        bonus = salary * 0.05;
    }
    console.log(`Bonus: $${bonus}`);
};  //log bonus

calculateBonus(5000, "Excellent");  //Test Data
calculateBonus(7000, "Good");       //Test Data

// Task 4 Parameters and Arguments, Scenario: Subscription Pricing Model

function calculateSubscriptionCost(plan, months, discount = 0) {
    let costPerMonth;
    if (plan === "Basic") {
        costPerMonth = 10;
    } else if (plan === "Premium") {
        costPerMonth = 20;
    } else if (plan === "Enterprise") {
        costPerMonth = 50;
    }
    let totalCost = costPerMonth * months;
    totalCost -= totalCost * (discount / 100);

    console.log(`Total Cost: $${totalCost}`);
};   //calculate monthly subscription cost

calculateSubscriptionCost("Basic", 6, 10);   //Test Data
calculateSubscriptionCost("Premium", 12, 0); //Test Data

// Task 5 Returning Values, Scenario: Currency Conversion

function convertCurrency(amount, exchangeRate) {
    let convertedAmount = amount * exchangeRate;
    console.log(`Converted Amount: $${convertedAmount.toFixed(2)}`);
};  //calculate the converted amount of currency

convertCurrency(100, 1.1);   //Test Data
convertCurrency(250, 0.85);  // Test Data

// Task 6  Higher-Order Functions, Scenario: Discount Strategy for Bulk Orders

let orders = [200, 600, 1200, 450, 800];  //Declare array orders

let applyBulkDiscount = (orders, discountFunction) => {
    return orders.map(discountFunction);
};  //calculate 10% discount on orders above $500
let updatedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);

console.log(updatedOrders);  //log updated orders

// Task 7 Closures, Scenario: Business Expense Tracker

function createExpenseTracker() {
    let totalExpenses = 0;
    return function(amount) {
        totalExpenses += amount;
        return `Total Expenses: $${totalExpenses}`;
    };
}
let tracker = createExpenseTracker();

console.log(tracker(200));   //Test Data
console.log(tracker(150));   //Test Data







