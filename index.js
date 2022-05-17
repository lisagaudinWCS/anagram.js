console.log("Toto est connecté");
// on crée une fonction qui passe les caractères en minuscule avec le LowerCase, éclate le string split dans un tableau.
function anagram(string1, string2) {
	string1 =  string1.toLowerCase().split('').sort().join('').trim();
    string2 =  string2.toLowerCase().split('').sort().join('').trim();
        //on compare les deux strings avec une réponse en true/false
        return string1 === string2 
}
//test true
console.log(anagram("B lA ", "LAb "));
//test false
console.log(anagram("Popey e", "AkaL oulo   uTata"));
