const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '59799d1fa0msh9950dfefdab022cp1fc48ejsna673230b3b97',
		'X-RapidAPI-Host': 'ipstack1.p.rapidapi.com'
	}
};
fetch('https://ipstack1.p.rapidapi.com/api.ipstack.com', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


const form = $document.querySelector('#form');
const $input = document.querySelector('#input')
const $submit = document.querySelector('#submit')


$form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const {value} = $input
  if (!value) return

  const ipInfo = await fetch(value)
})


