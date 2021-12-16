// Task: Make iterator which will print character index+1 in one line

function printNextCharacterIterator() {
  return function () {
    return {
      currentIndex: 0,
      length: myString.length,
      next() {
        if (this.currentIndex < this.length) {
          return { done: false, value: myString[(this.currentIndex + 1) % this.length], data: this.currentIndex++ };
        } else {
          return { done: true };
        }
      }
    };
  }
}

const myString = new String('abcdef');
myString[Symbol.iterator] = printNextCharacterIterator();

let nextChar = "";
for (let p of myString) {
  nextChar += p;
}

console.log(nextChar);