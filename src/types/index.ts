export type CreditCardType = {
    id: string;
    type: 'black' | 'white',
    balance: number,
    holder: string,
    valid: string,
    cardNo: string,
}