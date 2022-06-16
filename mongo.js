const mongoose = require('mongoose')
require('dotenv').config()


if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password> <contact name> <contact number>')
  process.exit(1)
}

const contactSchema = new mongoose.Schema({
  name: String,
  number: Number,
  id: Number,
})

const Contact = mongoose.model('Person', contactSchema)
const password = process.argv[2]
const url = `mongodb+srv://${process.env.USER_DB}:${password}@cluster0.wkysg.mongodb.net/phonebook?retryWrites=true&w=majority`

if (process.argv.length === 3){
  mongoose.connect(url)
  Contact
    .find({})
    .then(people => {
      console.log("Phonebook:\n")
      people.map(contact => console.log(contact.name, contact.number))
      return mongoose.connection.close()
    })
    .catch(error => console.log(error))
        
    }
    
else if (process.argv.length === 5){
  const name = process.argv[3]
  const number = process.argv[4]

  mongoose
  .connect(url)
  .then((result) => {
    console.log('connected')

    const contact = new Contact({
      name: name,
      number: number
    })

    return contact.save()
  })
  .then(() => {
    console.log(`added ${name} number ${number} to phonebook`)
    return mongoose.connection.close()
  })
  .catch((err) => console.log(err))


}
else{
  console.log("Mongo can take one argument <password> (just to see phonebook) or three arguments <password> <contact name> <contact number> to add one")
}




/*


  */