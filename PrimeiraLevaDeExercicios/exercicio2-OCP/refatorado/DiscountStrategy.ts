export default interface DiscountStrategy {
    apply(price: number): number
}