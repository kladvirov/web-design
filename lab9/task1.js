function promise(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function task1() {
    console.log("Task 1 started...");
    await promise(2000);
    console.log("Task 1 completed.");
}
  
async function task2() {
    console.log("Task 2 started...");
    await promise(1000);
    console.log("Task 2 completed.");
}
  
async function task3() {
    console.log("Task 3 started...");
    await promise(1500);
    console.log("Task 3 completed.");
}
  
async function runTasksConcurrently() {  
    await Promise.all([task1(), task2(), task3()]);
    console.log("All tasks completed.");
  }
  
runTasksConcurrently();
  