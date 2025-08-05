var ReadOnlyCloudStorage = /** @class */ (function () {
    function ReadOnlyCloudStorage() {
    }
    ReadOnlyCloudStorage.prototype.download = function (filename) {
        console.log("\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0444\u0430\u0439\u043B\u0430 '".concat(filename, "' \u0438\u0437 \u043E\u0431\u043B\u0430\u0447\u043D\u043E\u0433\u043E \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0430"));
        return "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0444\u0430\u0439\u043B\u0430 '".concat(filename, "'");
    };
    return ReadOnlyCloudStorage;
}());
var LocalFileStorage = /** @class */ (function () {
    function LocalFileStorage() {
    }
    LocalFileStorage.prototype.download = function (filename) {
        console.log("\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0444\u0430\u0439\u043B\u0430 '".concat(filename, "' \u0438\u0437 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0430"));
        return "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0444\u0430\u0439\u043B\u0430 '".concat(filename, "'");
    };
    LocalFileStorage.prototype.upload = function (file) {
        console.log("\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0444\u0430\u0439\u043B\u0430 '".concat(file, "' \u0432 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u043C \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435"));
    };
    LocalFileStorage.prototype.delete = function (filename) {
        console.log("\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u0430 '".concat(filename, "' \u0438\u0437 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0430"));
    };
    return LocalFileStorage;
}());
function fetchAndPrint(storage, filename) {
    var content = storage.download(filename);
    console.log(content);
}
function uploadAndClear(storage, filename) {
    storage.upload(filename);
    storage.delete(filename);
}
var s1 = new ReadOnlyCloudStorage();
var s2 = new LocalFileStorage();
fetchAndPrint(s1, "resume.pdf"); // ✅ works 
fetchAndPrint(s2, "notes.txt"); // ✅ works 
