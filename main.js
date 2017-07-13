console.log('loaded javascript')
const data = customers.results
console.log('you have ${data.length} people!!')

// loop over the data
// create html for each person
// add each html to the DOM
let section = document.getElementById('staff')
for (var i = 0; i < data.length; i++) {
  let person = data[i]
  console.log(person.email)

  // 3 step process (create box to store person)
  let personContainer = document.createElement('div') //1
  personContainer.className += 'person' //2
  section.appendChild(personContainer) //3
  //image tag
  let image = document.createElement('img') //1
  image.src = person.picture.large //2
  personContainer.appendChild(image) //3

  //name
  let name = document.createElement('h5')
  name.innerHTML = `${person.name.first} ${person.name.last}`
  personContainer.appendChild(name)
  //email
  let ecmail = document.createElement('p')
  ecmail.innerHTML = `${person.email}`
  personContainer.appendChild(ecmail)

  //address
  let address = document.createElement('address')
  let line1 = document.createElement('p')
  let line2 = document.createElement('p')
  let phoneNumber = document.createElement('p')

  line1.innerHTML = `${person.location.street}`
  line2.innerHTML = `${person.location.city} ${person.location.state} ${person.location.postcode}`
  phoneNumber.innerHTML = `${person.cell}`

  address.appendChild(line1)
  address.appendChild(line2)
  address.appendChild(phoneNumber)

  personContainer.appendChild(address)

  //SSN Number
  let ssn = document.createElement('p')
  ssn.innerHTML = `${person.id.value}`
  personContainer.appendChild(ssn)
}
