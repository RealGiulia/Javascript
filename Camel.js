function toCamelCase(word){
    let upperCaseWord = word.replaceAll(/[-_]\w/g, match => match.toUpperCase());
    let newWord = upperCaseWord.replaceAll(/-|_/g, "");
    return newWord;
}

console.log(toCamelCase("the_Stealth_warrior"));