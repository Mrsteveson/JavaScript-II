// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// Example from guided-project lecture for reference!

// function kingdom() {
//   console.log(`I am in the kingdom!`);
//   const message = "Pay your taxes!";
//   const taxes = 9001;
//   debugger;
  
//   // A town in our kingdom
//   function winterfell() {
//     const winterfellSaying = "I am in winterfell!";
//     const townMessage = "Come to the town hall next week";
//     console.log(`${winterfellSaying} And we got the message: ${message}`);
//     debugger;
    
//     // A hamlet in our town
//     function snowflake() {
//       const snowflakeSaying = "I am in snowflake!"
//       console.log(`${snowflakeSaying} And we got the message from the kingdom: ${message} and we got the message from the town: ${townMessage}`);
//       debugger;
//     }
    
//     snowflake();
//   }
  
//   winterfell();
// }

// kingdom();

function wordmathproblem() {
  console.log(`One plus one`)
  const add = "Add another one!";
  debugger;

  function smallmath() {
    const smallmathSubtract = "subtract one!";
    const smallmathSays = "This is getting confusing right?";
    console.log(`One plus one is two. ${smallmathSays} Well then ${add} Now we should have three`);

    function tiniestmath() {
      const tiniestmathComplains = "Are you confused yet?"
      console.log(`${tiniestmathComplains} One plus one plus one gives us three. Now ${smallmathSubtract} Now ${add} and we get back to three.(I hope)`);
    }
    tiniestmath();
  }
  smallmath();
}
wordmathproblem();

// My function above is pretty simple, basically a replication of what we did during the guided-project but rewrote it to make it a little entertaining (and confusing).
// Will work on more complex ones using things other than strings later, starting to understand the concept though. :D




/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
// const counter = () => {
//   Return a function that when invoked increments and returns a counter variable.
// };
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

let counter = 0;

let add = (function() {
  return function () {counter +=1; return counter}
})();

add();
add();

console.log(counter);

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
