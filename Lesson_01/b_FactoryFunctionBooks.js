function createBook (title, author, read = false) {
  return {
    title,
    author,
    read: read,
    
    readBook () {
      this.read = true;
    },
    
    getDescription () {
      return `${title} was written by ${author}. ` + `I ${this.read ? "have" : "haven't"} read it.` ;
    },
  };
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
let book3 = createBook('Aunts aren\'t Gentlemen', 'PG Wodehouse', true);

console.log(book1.getDescription());
console.log(book2.getDescription());
console.log(book3.getDescription());