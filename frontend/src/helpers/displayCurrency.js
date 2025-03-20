const displayINRCurrency = (num) => {
    const formatter = new Intl.NumberFormat('en-IN', {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2
    });

    return `RS: ${formatter.format(num).replace("₹", "").trim()}`;
};

export default displayINRCurrency;
