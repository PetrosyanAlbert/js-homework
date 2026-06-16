function greetLater(name){
    setTimeout(() => {
        console.log(name);
    }, 2000);
}
greetLater("Alice")