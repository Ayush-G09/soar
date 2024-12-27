export type CreditCardType = {
    id: string;
    type: 'black' | 'white',
    balance: number,
    holder: string,
    valid: string,
    cardNo: string,
};

export type TransactionType = {
    id: string,
    badgeType: 'deposit' | 'paypal' | 'dollar',
    title: string,
    date: string,
    amount: string,
};

export type UserType =     {
    id: string,
    name: string,
    role: string,
    img: string,
};