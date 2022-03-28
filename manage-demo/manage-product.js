class ManageProduct {
    listProduct = [];
    constructor() {
        this.listProduct.push(new Product(1, 'IP12', 1200));
        this.listProduct.push(new Product(2, 'IP13', 1400));
        this.listProduct.push(new Product(3, 'IP14', 1600));
    }

    display() {
        for (let i=0; i<this.listProduct.length; i++) {
            this.listProduct[i].display();
        }
    }

    add(product) {
        this.listProduct.push(product);
    }
}