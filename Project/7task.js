// Базовый класс Game
class Game {
    constructor(title, genre, releaseDate, developer, publisher) {
        this.title = title;
        this.genre = genre;
        this.releaseDate = releaseDate;
        this.developer = developer;
        this.publisher = publisher;
    }

    getInfo() {
        return `🎮 ${this.title} (${this.genre}) — Релиз: ${this.releaseDate}.
Разработчик: ${this.developer.name}, Издатель: ${this.publisher ? this.publisher.name : "—"}`;
    }
}

// Подкласс ActionGame
class ActionGame extends Game {
    constructor(title, genre, releaseDate, developer, publisher, violenceLevel = "Medium", isMultiplayer = true) {
        super(title, genre, releaseDate, developer, publisher);
        this.violenceLevel = violenceLevel;
        this.isMultiplayer = isMultiplayer;
    }

    getInfo() {
        return `🎮 ${this.title} [Action] — Жанр: ${this.genre}, Релиз: ${this.releaseDate}.
Разработчик: ${this.developer.name}, Издатель: ${this.publisher ? this.publisher.name : "—"}.
Насилие: ${this.violenceLevel}, Мультиплеер: ${this.isMultiplayer ? "Да" : "Нет"}`;
    }
}

// Подкласс StrategyGame
class StrategyGame extends Game {
    constructor(title, genre, releaseDate, developer, publisher, mapType = "Square", turnBased = true) {
        super(title, genre, releaseDate, developer, publisher);
        this.mapType = mapType;
        this.turnBased = turnBased;
    }

    getInfo() {
        return `🎮 ${this.title} [Strategy] — Жанр: ${this.genre}, Релиз: ${this.releaseDate}.
Разработчик: ${this.developer.name}, Издатель: ${this.publisher ? this.publisher.name : "—"}.
Карта: ${this.mapType}, Пошаговая: ${this.turnBased ? "Да" : "Нет"}`;
    }
}

// Класс Developer
class Developer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.gamesDeveloped = [];
    }

    createGame(title, genre, releaseDate, type, publisher = null) {
        let game;
        if (type === "ActionGame") {
            game = new ActionGame(title, genre, releaseDate, this, publisher);
        } else if (type === "StrategyGame") {
            game = new StrategyGame(title, genre, releaseDate, this, publisher);
        } else {
            throw new Error("Неверный тип игры.");
        }

        this.gamesDeveloped.push(game);
        return game;
    }

    listGames() {
        return this.gamesDeveloped.map(game => game.title);
    }

    updateGameTitle(game, newTitle) {
        if (this.gamesDeveloped.includes(game)) {
            game.title = newTitle;
            console.log(`✅ Название игры обновлено на "${newTitle}"`);
        }
    }
}

// Класс Publisher
class Publisher {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.gamesPublished = [];
        this.count = new Map();
    }

    publishGame(game) {
        game.publisher = this;
        this.gamesPublished.push(game);
        console.log(`🚀 Игра "${game.title}" опубликована издателем ${this.name}`);
    }

    listReleases() {
        return this.gamesPublished.map(game => game.title);
    }

    trackSales(game, amount) {
        this.count.set(game, amount);
        console.log(`📊 Продажи игры "${game.title}" обновлены: ${amount} копий`);
    }
}

const dev = new Developer("Jane Dev", "jane@devs.com");
const pub = new Publisher("MegaPub", "contact@megapub.com");

// Создаём игру через разработчика (без указания издателя)
const game = dev.createGame("BattleZone", "Action", "2025-01-01", "ActionGame");

// Издатель публикует игру
pub.publishGame(game);

// Выводим информацию
console.log(game.getInfo());
