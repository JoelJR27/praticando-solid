import DiscountStrategy from "./DiscountStrategy";

export default class PercentageDiscount implements DiscountStrategy {
    constructor(private percentage: number) {
        this.percentage = percentage
    }
    apply(price: number): number {
        return price - price * (this.percentage / 100)
    }
}