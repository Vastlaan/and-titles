let data = []

const root = document.querySelector('#root')

// fetch cards data
async function getData(){
  const response = await fetch('https://us-central1-and-business-card.cloudfunctions.net/list')
  const data = await response.json()
  return data
}

async function renderCards(){

  const data = await getData()

  const cards = document.createElement('div')
  cards.id='cards'

  data.map(andi=>{
    const name = document.createElement('div')
    name.innerHTML = andi.name
    const title = document.createElement('div')
    title.innerHTML = andi.title
    const card = document.createElement('div')
    card.appendChild(name)
    card.appendChild(title)
    cards.appendChild(card)
  })

  root.appendChild(cards)
}

renderCards()