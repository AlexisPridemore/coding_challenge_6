// Task 1 Function Declaration, Scenario: Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold) {
   let profit = (sellingPrice - costPrice) * unitsSold;
   console.log(`Total Profit: $${profit}`);
};  //calculate total profit

calculateProfit(20, 30, 100);   //Test Data
calculateProfit(50, 70, 200);   //Test Data
