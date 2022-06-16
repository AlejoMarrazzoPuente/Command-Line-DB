
# Command-line database project

Simple, little and fast project where I connect with
a mongoDB Atlas database and interact with it through
the command-line.

As you see, we only can have two interactions:

    1) See all our contacts
    2) Add a new contact

### What did I use 
- nodeJS
- npm
- mongoose

___
#### To consider: 

 node mongo.js \<password\> \<contact name\> \<contact number\>

is the full command. This will add a contact to the db, but 
if instead you want to see the full list, then you just have 
to write:

node mongo.js <password>
