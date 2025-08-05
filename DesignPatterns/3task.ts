interface IReadableStorage {
    download(file: string): void;
}

interface IWritableStorage {
    upload(file: string): void;
    delete(filename: string): void; 
}

class ReadOnlyCloudStorage implements IReadableStorage {
    download(filename: string): string {
        console.log(`Загрузка файла '${filename}' из облачного хранилища`);
        return `Содержимое файла '${filename}'`;

    }
}

class LocalFileStorage implements IReadableStorage, IWritableStorage {
    download(filename: string): string {
        console.log(`Загрузка файла '${filename}' из локального хранилища`);
        return `Содержимое файла '${filename}'`;
    }

    upload(file: string): void {
        console.log(`Загрузка файла '${file}' в локальном хранилище`);
    }

    delete(filename: string): void {
        console.log(`Удаление файла '${filename}' из локального хранилища`);
    }
}

function fetchAndPrint(storage: IReadableStorage, filename: string): void { 
  const content = storage.download(filename); 
  console.log(content); 
}

function uploadAndClear(storage: IWritableStorage, filename: string): void {
    storage.upload(filename);
    storage.delete(filename);
}

const s1 = new ReadOnlyCloudStorage(); 
const s2 = new LocalFileStorage(); 
 
fetchAndPrint(s1, "resume.pdf"); // ✅ works 
fetchAndPrint(s2, "notes.txt");  // ✅ works 