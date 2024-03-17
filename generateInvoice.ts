import { Product } from "./model/product";

export class Invoice {
  generateInvoice(products: Product[], total: number) {
    console.log(`Total Products-----`);
    console.log(`*******************`);
    console.table(products);
    console.warn("Total---------------------------------->", total);
  }
}
