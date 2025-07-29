const { use } = require("react");

class StorageProvider {
    constructor(){
        if(new.target === StorageProvider){
            throw new Error("Error111");
        }
    }
    upload(file) {
        throw new Error("upload() must be implemented");
    }
    download(filename) {
        throw new Error("download() must be implemented");
    }
}

class LocalStorageProvider extends StorageProvider {
    upload(file) {
        console.log(`Uploading "${file}" to local storage`);
    }

    download(filename) {
        console.log(`Downloading "${filename}" from local storage`);
    }
}

class CloudStorageProvider extends StorageProvider {
  upload(file) {
    console.log(`Uploading "${file}" to cloud`);
  }

  download(filename) {
    console.log(`Downloading "${filename}" from cloud`);
  }
}

function useStorage(provider){
    if(!(provider instanceof StorageProvider)){
        throw new Error("Must extend StorageProvider");
    }
    provider.upload("a.txt");
    provider.download("a.txt");
}

let l = new LocalStorageProvider();
let k = new CloudStorageProvider();

useStorage(l);
useStorage(k);

