function checkCashRegister(price, cash, cid) {
    const CID = JSON.parse(JSON.stringify(cid));
    const monetaryValue = {
        "ONE HUNDRED": 10000,
        "TWENTY": 2000,
        "TEN": 1000,
        "FIVE": 500,
        "ONE": 100,
        "QUARTER": 25,
        "DIME": 10,
        "NICKEL": 5,
        "PENNY": 1
    }

    let result = {};
    let change = (cash - price) * 100;
    let registerTotal = 0;

    for (let currency of CID.reverse()) {
        registerTotal += currency[1];
        const currentValue = monetaryValue[currency[0]];
        while (change >= currentValue && currency[1] > 0) {
            change -= currentValue;
            currency[1] -= currentValue * 0.01;
            if (!result.hasOwnProperty(currency[0])) {
                result[currency[0]] = 0; // Initialize the parameter to 0
            }
            result[currency[0]] += currentValue * 0.01; // Add the value to the parameter

        }
    }
    if (change > 0 || registerTotal < cash - price) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (registerTotal == cash - price) {
        return { status: "CLOSED", change: cid };
    } else {
        return { status: "OPEN", change: Object.entries(result) };
    }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));