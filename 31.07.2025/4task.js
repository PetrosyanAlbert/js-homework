class Printable {
  print(doc) {
    throw new Error("Метод print() должен быть реализован");
  }
}

class Scannable {
  scan(doc) {
    throw new Error("Метод scan() должен быть реализован");
  }
}

class Faxable {
  fax(doc) {
    throw new Error("Метод fax() должен быть реализован");
  }
}

class Printer extends Printable {
  print(doc) {
    console.log("Печать:", doc);
  }
}

class Scanner extends Scannable {
  scan(doc) {
    console.log("Сканирование:", doc);
  }
}

class FaxMachine extends Faxable {
  fax(doc) {
    console.log("Факс отправлен:", doc);
  }
}

let sc = new Scanner();

sc.scan("Google");
