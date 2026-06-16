function randomDelayedLog() {
  const delay = Math.floor(Math.random() * 5 + 1) * 1000; 
  setTimeout(() => {
    console.log("Сообщение с задержкой!");
  }, delay);
}
randomDelayedLog();
