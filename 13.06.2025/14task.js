function addMethod(obj, name){
    obj[name] = function(){
        return `"${name}" kanchvel e`;
    };
}
let obj = {};
addMethod(obj, "hello");
console.log(obj.hello());
