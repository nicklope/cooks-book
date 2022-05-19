const db = require('../db')
const Tag = require('../models/Tag')

const main = async () => {
  const tags = [
    { tagName: 'seafood' },
    { tagName: 'asian' },
    { tagName: 'japanese' },
    { tagName: 'mediterranean' },
    { tagName: 'italian' },
    { tagName: 'caribbean' },
    { tagName: 'puerto rican' }
  ]
  await Tag.insertMany(tags)
  console.log('Here come some tags!')
}
const run = async () => {
  await main()
  db.close()
}
run()
