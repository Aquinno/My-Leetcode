/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged = [word1[0],word2[0]];

    if (word1.length >= word2.length){
        for (let i = 1; i < word1.length; i++){
            if (word2[i]){
                merged.push(word1[i]);
                merged.push(word2[i]);
            }
            else{
                merged.push(word1[i]);
            }
        }
    }
    else if (word2.length > word1.length){
        for (let i = 1; i < word2.length; i++){
            if (word1[i]){
                merged.push(word1[i]);
                merged.push(word2[i]);
            }
            else{
                merged.push(word2[i]);
            }
        }
    }

    return merged.join("");
};
