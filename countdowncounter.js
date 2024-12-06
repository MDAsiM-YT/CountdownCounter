
//Q .1. Create a counter in Javascript (counts down from 30 to 0)


let countdown = 30; // Start value

const interval = setInterval(() => {
  console.log(countdown);                     // Output the countdown to the console
  countdown--;                                // Decrease the countdown value

  if (countdown < 0) {
    clearInterval(interval);                 // Stop the timer when it reaches 0
    console.log("Time's Up!");
  }
}, 1000);                                    // Run every 1000ms (1 second)
