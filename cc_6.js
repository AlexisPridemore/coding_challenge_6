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