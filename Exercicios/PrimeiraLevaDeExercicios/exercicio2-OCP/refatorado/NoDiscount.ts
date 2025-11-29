import DiscountStrategy from "./DiscountStrategy";

export default class NoDiscount implements DiscountStrategy {
    apply(price: number): number {
        return price
    }
}