/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    var alt = 0;
    var array = [0];
    var high = 0;
    for (let i = 0; i < gain.length; i++){
        alt += gain[i];
        array.push(alt);
        if (alt >= 0){
            high = alt
        }
    }
    return high;
};
