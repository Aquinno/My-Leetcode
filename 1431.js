/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let finalArray = [];
    let maxCandies = Math.max(...candies);

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxCandies) {
            finalArray.push(true);
        } else {
            finalArray.push(false);
        }
    }
    return finalArray;
};
