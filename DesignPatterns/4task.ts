interface ICanCreate {
    createPost(): void;
}

interface ICanModerate {
    deletePost(): void;
    banUser(): void;
}

interface ICanViewStats {
    viewStats(): void;
}


class ViewerUser implements ICanViewStats {
    viewStats(): void {
        console.log('Viewer: Просмотр статистики...');
    }
}

class ModeratorUser implements ICanModerate {
    deletePost(): void {
        console.log('Moderator: Удаление поста...');
    }
    banUser(): void {
        console.log('Moderator: Бан пользователя...');
    }
}


class AdminUser implements ICanCreate, ICanModerate, ICanViewStats {
    createPost(): void {
        console.log('Admin: Создание поста...');
    }
    deletePost(): void {
        console.log('Admin: Удаление поста...');
    }
    banUser(): void {
        console.log('Admin: Бан пользователя...');
    }
    viewStats(): void {
        console.log('Admin: Просмотр статистики...');
    }
}


const viewer = new ViewerUser();
viewer.viewStats();    


const moderator = new ModeratorUser();
moderator.deletePost();  
moderator.banUser();     



const admin = new AdminUser();
admin.createPost();     
admin.deletePost();      
admin.viewStats();       
admin.banUser();         