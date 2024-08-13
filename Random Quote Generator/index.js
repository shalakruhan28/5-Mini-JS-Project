const Quotes= [    "The only way to do great work is to love what you do.",
  "Life is what happens when you're busy making other plans." ,
  "The future belongs to those who believe in the beauty of their dreams." ,
  "It does not matter how slowly you go as long as you do not stop.",
  "In the end, it's not the years in your life that count. It's the life in your years.",
  "The purpose of our lives is to be happy.",
  "Get busy living or get busy dying.",
  "You only live once, but if you do it right, once is enough.",
  "Many of life's failures are people who did not realize how close they were to success when they gave up.",
  "If you want to live a happy life, tie it to a goal, not to people or things." ,
  "Too err is Human."
]

 const useIndexes = new Set ()    //A JavaScript Set is a collection of unique values.
const quoteElement = document.getElementById("Quote")

function generateQuote(){
  if (useIndexes.size >= Quotes.length){
    useIndexes.clear()
  }
  while(true){
    const randomIdx = Math.floor(Math.random() * Quotes.length)
    if (useIndexes.has(randomIdx))
      continue
    const quote = Quotes[randomIdx]
    quoteElement.innerHTML=quote
    useIndexes.add(randomIdx)
    break
  }
}