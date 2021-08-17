const arrayOfAndis = [
  {
    name: "Ivan",
    title: "Some title 1"
  },
  {
    name: "Ivan",
    title: "Some title 2"
  },
  {
    name: "Ivan",
    title: "Some title 3"
  }
]

const root = document.querySelector('#root')

console.log(root)

arrayOfAndis.map(andi=>{
  const name = document.createElement('div')
  name.innerHTML = andi.name
  const title = document.createElement('div')
  title.innerHTML = andi.title
  const card = document.createElement('div')
  card.appendChild(name)
  card.appendChild(title)
  root.appendChild(card)
})