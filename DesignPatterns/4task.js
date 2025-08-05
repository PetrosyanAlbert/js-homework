var ViewerUser = /** @class */ (function () {
    function ViewerUser() {
    }
    ViewerUser.prototype.viewStats = function () {
        console.log('Viewer: Просмотр статистики...');
    };
    return ViewerUser;
}());
var ModeratorUser = /** @class */ (function () {
    function ModeratorUser() {
    }
    ModeratorUser.prototype.deletePost = function () {
        console.log('Moderator: Удаление поста...');
    };
    ModeratorUser.prototype.banUser = function () {
        console.log('Moderator: Бан пользователя...');
    };
    return ModeratorUser;
}());
var AdminUser = /** @class */ (function () {
    function AdminUser() {
    }
    AdminUser.prototype.createPost = function () {
        console.log('Admin: Создание поста...');
    };
    AdminUser.prototype.deletePost = function () {
        console.log('Admin: Удаление поста...');
    };
    AdminUser.prototype.banUser = function () {
        console.log('Admin: Бан пользователя...');
    };
    AdminUser.prototype.viewStats = function () {
        console.log('Admin: Просмотр статистики...');
    };
    return AdminUser;
}());
var viewer = new ViewerUser();
viewer.viewStats();
var moderator = new ModeratorUser();
moderator.deletePost();
moderator.banUser();
var admin = new AdminUser();
admin.createPost();
admin.deletePost();
admin.viewStats();
admin.banUser();
