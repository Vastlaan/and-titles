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
  name.className = 'name'
  const title = document.createElement('div')
  title.innerHTML = andi.title
  title.className = 'title'
  const card = document.createElement('div')
  card.className = 'card'
  card.appendChild(name)
  card.appendChild(title)
  root.appendChild(card)
})

async function getData(){
  const response = await fetch('https://us-central1-and-business-card.cloudfunctions.net/list')
  const data = await response.json()
  console.log(data)
}

getData()