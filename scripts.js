const arrayOfAndis = [
  {
    name: "Ivan",
    title: "Some title"
  },
  {
    name: "Ivan",
    title: "Some title"
  },
  {
    name: "Ivan",
    title: "Some title"
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