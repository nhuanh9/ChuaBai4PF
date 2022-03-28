class Product {
    id; name; price; 
    constructor(i, n, p) {
        this.id = i;
        this.name = n;
         this.price = p;
    }

    display() {
        document.write(this.id+ ' '+ this.name+' '+this.price+'<br>');
    }
}