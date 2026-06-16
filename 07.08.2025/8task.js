function boilwater(callback){
    setTimeout(() => {
        console.log("Вода готова");
        callback();
    }, 2000);
}

function addPasta(callback) {
    console.log("Добавляем пасту...");
    setTimeout(() => {
        console.log("Паста добавлена.");
        callback();
    }, 1000); 
}

boilwater(() => {
    addPasta(() => {
        console.log("End");
    })
})


