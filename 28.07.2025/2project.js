let Color = {
    RED: Symbol("RED"),
    BLUE: Symbol("BLUE"),
    GREEN: Symbol("GREEN")
};

function getColorName(symbol){
    for(const [key, value] of Object.entries(Color)){
        if(value === symbol) {
            return key;
        }
    }
    return undefined;
}

let col = Color.BLUE;

console.log(getColorName(col));
console.log(getColorName(Symbol("BLUE")));