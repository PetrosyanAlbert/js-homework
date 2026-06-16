function log(seconds) {
  console.log("Task started");
  const start = Date.now();

  setTimeout(() => {
    const end = Date.now();
    const elapsed = ((end - start) / 1000);
    console.log("Task ended");
    console.log(`Elapsed time: ${elapsed} seconds`);
  }, seconds * 1000);
}

log(2); 
