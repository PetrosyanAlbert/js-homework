function boilwater(callback) {
    console.log("Кипящая вода...");

    setTimeout(() => {
        callback();
    }, 3000);
}

    function onBoilComplete() {
        console.log("Вода готова!");
    }



boilwater(onBoilComplete);