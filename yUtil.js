/**
 * 浮点数加法运算
 * @param arg1
 * @param arg2
 * @returns {number}
 */
function floatAdd(arg1, arg2) {
    var r1, r2, m;
    try{
        r1 = arg1.toString().split(".")[1].length;
    } catch(e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    } catch(e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
}

/**
 * 千分位-格式化: 常用于显示价格
 * @param num
 * @returns {string}
 */
function toThousands(num) {
    return parseFloat(num).toFixed(2).replace(/(\d{1,3})(?=(\d{3})+(?:\.))/g, "$1,");
}