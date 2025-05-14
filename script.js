// Task 1: Format full name as "LastName, FirstName" with capitalization
function formatFullName(firstName, lastName) {
  if (!firstName || !lastName)
     return "Invalid name input."; // Return error if any name is missing

  // Capitalize first letter of both names and return formatted full name
  const capFirst = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const capLast = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

  return `${capLast}, ${capFirst}`;
}

// Test Task 1
console.log(formatFullName("haida", "makouangou"));    
console.log(formatFullName("", "Makouangou"));      
console.log(formatFullName("pouaty", "Sarah"));   



// Task 2: Calculate total cost with tax
function calculateTotalCost(price, quantity, taxRate) {
  if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) 
    return "Invalid input."; // Return error if any input is not a number

  // Calculate total cost including tax
  return (price * quantity) * (1 + taxRate);
}

// Test task2
console.log(calculateTotalCost(10, 2, 0.1));     
console.log(calculateTotalCost(15, 3, 0.08));   
console.log(calculateTotalCost("five", 2, 0.1));  




// Task 3: Function to check eligibility based on age and employment status
function checkEligibility(age, isEmployed) {
    if (age > 18 && isEmployed) {
        return "Eligible."; // Eligible if over 18 and employed
    } else if (age > 18 && !isEmployed) {
        return "Conditionally eligible."; // Conditioned eligibility if over 18 but not employed
    } else {
        return "Not eligible."; // Not eligible if 18 or younger
    }
}

// Test Task 3
console.log(checkEligibility(20, true));  
console.log(checkEligibility(25, false)); 
console.log(checkEligibility(16, true));   

// Task 4: Refactored function to handle optional discount
function calculateTotalCostWithDiscount(price, quantity, taxRate, discount = 0) {
    if (isNaN(price) || isNaN(quantity) || isNaN(taxRate) || isNaN(discount)) {
        return "Invalid input.";
    }

    const subtotal = (price * quantity) - discount;
    const totalCost = subtotal * (1 + taxRate);
    return totalCost;
}

// Test Task 4
console.log(calculateTotalCostWithDiscount(10, 2, 0.1));        
console.log(calculateTotalCostWithDiscount(10, 2, 0.1, 5));      
console.log(calculateTotalCostWithDiscount(10, "two", 0.1));     





