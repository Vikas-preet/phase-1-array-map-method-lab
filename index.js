const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  let titleCaseArray = tutorials.map((string) => {
    let words = string.split(" ");
     let upperCaseString = words.map((word)=>{
        let upperCase = (word[0].toUpperCase() + word.slice(1));
       return upperCase;
     })

    return upperCaseString;                    
  })
  
 let titleCaseString = titleCaseArray.map((str)=>{
   let titleCase = str.join(' ')
   return titleCase;
 })
  return titleCaseString; 
}
titleCased();