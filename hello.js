// Load Node.js tools for asking a question in the terminal.
const readline = require("node:readline/promises");
const { stdin, stdout } = require("node:process");

// Put the program steps in an async function so it can wait for user input.
async function main() {
  // Create a terminal interface and ask how many lines tall the diamond should be.
  const terminal = readline.createInterface({ input: stdin, output: stdout });
  const input = await terminal.question("Enter the diamond height (odd number of lines): ");
  // Close the interface once the user has entered a height.
  terminal.close();

  // Convert the input text to a number and check that it is a positive odd integer.
  const height = Number(input);
  if (!Number.isInteger(height) || height < 1 || height % 2 === 0) {
    // Tell the user what input is allowed and mark the program as unsuccessful.
    console.error("Please enter a positive odd integer.");
    process.exitCode = 1;
    // Stop here so invalid input is not used to draw the diamond.
    return;
  }

  // Find the middle row; this also works when the diamond is only one line tall.
  const middle = Math.floor(height / 2);
  // Visit each row from top to bottom.
  for (let row = 0; row < height; row++) {
    // The distance from the middle determines both the indentation and star count.
    const distanceFromMiddle = Math.abs(middle - row);
    // Start with one star at the top and bottom, adding two per row toward the middle.
    const stars = height - 2 * distanceFromMiddle;
    // Print leading spaces followed by stars to center this row.
    console.log(" ".repeat(distanceFromMiddle) + "*".repeat(stars));
  }
}

// Start the program.
main();
