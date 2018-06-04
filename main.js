// Querying DOM Components Practice
const myName = "Jisie"

const articleHeader = document.querySelector(".article__header")
articleHeader.textContent = `Welcome the ${myName} blog`

const articleHeaders = document.querySelectorAll(".article__header")

for (let i = 0; i < articleHeaders.length; i++) {
  articleHeaders[i].classList.add("important")
}

// Building DOM Components Practice
const messagesArticle = document.querySelector("#messages")

const sectionsFragment = document.createDocumentFragment()

const sectionOne = document.createElement("section")
sectionOne.className = "message"
sectionOne.textContent = "Hello"
sectionsFragment.appendChild(sectionOne)

const sectionTwo = document.createElement("section")
sectionTwo.className = "message"
sectionTwo.textContent = "So, the surgery took like 20 minutes"
sectionsFragment.appendChild(sectionTwo)

const sectionThree = document.createElement("section")
sectionThree.className = "message"
sectionThree.textContent = "I wouldn't believe them when they said I'm all done"
sectionsFragment.appendChild(sectionThree)

const sectionFour = document.createElement("section")
sectionFour.className = "message"
sectionFour.textContent = "But they insisted and basically escorted me out of the room"
sectionsFragment.appendChild(sectionFour)

const sectionFive = document.createElement("section")
sectionFive.className = "message"
sectionFive.textContent = "I'm gonna take a nap now"
sectionsFragment.appendChild(sectionFive)

messagesArticle.appendChild(sectionsFragment)
