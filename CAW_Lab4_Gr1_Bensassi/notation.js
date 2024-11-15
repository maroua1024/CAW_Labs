function mean(scores) {
    sum = scores.reduce((a, b) => a + b, 0);
    return sum / scores.length;
}
module.exports = mean;
 