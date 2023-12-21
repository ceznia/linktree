const meineErsteVariable = 1
const a = 5
const b = 5
const c = 10

const myTitle = document.getElementById("title")

const defaultTitle = myTitle.textContent

function swapTitle(title) {
    if (myTitle.textContent === title) {
        myTitle.textContent = defaultTitle
    } else {
        myTitle.textContent = title
    }
}

myTitle.addEventListener('click', () => swapTitle("Linktree"))

console.log(myTitle)
