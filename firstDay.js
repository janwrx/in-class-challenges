// function takes in two arguments: number & string
function encrypt(number, string) {
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  let newLetters = []
  // apply a caesar shift by number
  for (let i = 0; i<string.length; i++) {
    let letter = string[i]
    let newIndex = alphabet.indexOf(letter) + number
    // if the new index > 25, subtract 25 to keep it in alphabet array
    if( newIndex > 25 ){
      newIndex = newIndex - 26
    }
    // regardless, push into newLetters array
    newLetters.push(alphabet[newIndex])
  }
  // return string
  return newLetters.join("")
}

console.log(encrypt(1, 'bzip')) // expect: f d m t

// function takes in two arguments: number & string
function betterEncrypt(number, string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let alphabetArray = alphabet.split('')

  let newLetters = []
  // apply a caesar shift by number
  for (let i = 0; i<string.length; i++) {
    let letter = string[i]
    let newIndex = (alphabetArray.indexOf(letter) + number) % 26

    // regardless, push into newLetters array
    newLetters.push(alphabetArray[newIndex])
  }
  // return string
  return newLetters.join("")
}

console.log(betterEncrypt(1, 'bzip')) // expect: f d m t


// function takes in two arguments: number & string
function evenBetterEncrypt(number, string) {
  // define the alphabet
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'

  // create array of individual strings
  let wordsArray = string.split(' ') // 'abc abc' => ['abc', 'abc']

  // for each word in words Array
  let newWords = wordsArray.map(word => {
    // split the string into array of letters
    let splitString = word.toLowerCase().split('') // 'ABC' => ['a', 'b', 'c']
    // for each letter
    let newLetters = splitString.map(character => {
      // add the given number to the character's index and return new character
      if( alphabet.includes(character) ) {
        return alphabet[(alphabet.indexOf(character) + number) % 26]
      } else {
        return character
      }
    })
    // turn the array into a string and join
    return newLetters.join('')
  })
  // return the array of strings into a string separated by spaces
  return newWords.join(' ')
}

console.log(evenBetterEncrypt(1, 'abc, @abc-abc!')) // expect: f d m t
