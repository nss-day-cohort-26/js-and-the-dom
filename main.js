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

const createSectionEl = (elementType, elementClass, elementText) => {
  const newDomEl = document.createElement(elementType)
  newDomEl.className = elementClass
  newDomEl.textContent = elementText
  return newDomEl
}

const sectionTexts = ["Hello", "So, the surgery took like 20 minutes", "I wouldn't believe them when they said I'm all done", "But they insisted and basically escorted me out of the room", "I'm gonna take a nap now"]

for (let i = 0; i < sectionTexts.length; i++) {
  const sectionElement = createSectionEl("section", "messages", sectionTexts[i])
  sectionsFragment.appendChild(sectionElement)
}

messagesArticle.appendChild(sectionsFragment)
