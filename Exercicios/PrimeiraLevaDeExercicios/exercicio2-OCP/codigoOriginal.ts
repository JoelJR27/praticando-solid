type Product = {
  name: string;
  price: number;
  discountType: "none" | "percentage" | "fixed";
};

export function calculateDiscount(product: Product) {
  if (product.discountType === "none") {
    return product.price;
  }

  if (product.discountType === "percentage") {
    return product.price * 0.9;
  }

  if (product.discountType === "fixed") {
    return product.price - 20;
  }
}
