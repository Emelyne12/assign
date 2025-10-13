function calculateMarks() {
  // Step 1: Create an array of marks (size 5)
  let marks = [78, 92, 65, 88, 74];

  // Step 2: Sort the marks in ascending order
  marks.sort((a, b) => a - b);

  console.log("Sorted Marks:", marks);

  // Step 3: Calculate the sum using a for loop
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }

  // Step 4: Calculate the average
  let average = sum / marks.length;

  // Step 5: Display the results
  console.log("Sum of Marks:", sum);
  console.log("Average Marks:", average);
}

// Call the function
calculateMarks();