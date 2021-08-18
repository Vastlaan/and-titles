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

  const existingCards = document.getElementById("cards");

  if (existingCards) {
    existingCards.remove();
  }

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

const form = document.querySelector('#form')
form.addEventListener('submit', submitForm)

async function submitForm(event){
  event.preventDefault();
  
  const name = document.getElementById("name_field").value;
  const title = document.getElementById("title_field").value;

  console.log(`name=${name}&title=${title}`);

  const response = await fetch('https://us-central1-and-business-card.cloudfunctions.net/add', {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: `name=${name}&title=${title}`
  });

  console.log(response);

  renderCards();
}