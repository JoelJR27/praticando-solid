import DiscountStrategy from "./DiscountStrategy";

export default class FixedDiscount implements DiscountStrategy {
    constructor(private discount: number) {
        this.discount = discount
    }

    apply(price: number): number {
        return price - this.discount
    }
}