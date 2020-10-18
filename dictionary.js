// const dictionary = {};
// dictionary[name] = 'Roky Das';

class Dictionary {
    constructor() {
        this.dictionary = {};
    }
    add(key, value) {
        this.dictionary[key] = value;
    }
    get(key) {
        return this.dictionary[key];
    }
}

const phoneBook = new Dictionary();
phoneBook.add('Roky Das', '01521227862');
phoneBook.add('Riya Das', '01754534545');
console.log(phoneBook.dictionary);

const rokyNumber = phoneBook.get('Roky Das');
console.log(rokyNumber);