export  const  convertVNDToUSD = (amountVND, exchangeRate = 24000) => {
    if (amountVND < 0) {
        throw new Error("Số tiền không hợp lệ");
    }
    return (amountVND / exchangeRate).toFixed(2); // Giữ 2 số thập phân
};