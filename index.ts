import { Invoice } from "./generateInvoice";
import { Product } from "./model/product";
import { SaveInvoice } from "./saveInvoice";

class Store {
  products: Product[] = [];

  addProduct(product: Product) {
    this.products.push(product);
  }

  getProducts(): Product[] {
    return this.products;
  }

  removeProduct(id: number) {
    this.products = this.products.filter(
      (product: Product) => product.id !== id
    );
  }

  calculateTotal() {
    return this.products.reduce((total, curVal) => {
      return total + curVal.price * curVal.quantity;
    }, 0);
  }

  generateInvoice() {
    console.log(`Total Products-----`);
    console.log(`*******************`);
    console.table(this.getProducts());
    console.warn(
      "Total---------------------------------->",
      this.calculateTotal()
    );
  }

  saveInoviceToDb() {
    console.log("Saving invoice in db");
    console.log("Invoice saved....");
  }
}

const prod1 = new Product(1, "Pendrive", 1000, 10);
const prod2 = new Product(2, "Keyboard", 2000, 20);

const store = new Store();

store.addProduct(prod1);
store.addProduct(prod2);
// store.removeProduct(1);

// store.generateInvoice();

// const invoice = new Invoice();
// invoice.generateInvoice(store.getProducts(), store.calculateTotal());

// const saveToDb = new SaveInvoice();
// saveToDb.saveInoviceToDb();
