const mongoose = require('mongoose')

const url = 'mongodb+srv://utf:150210@cluster0.xr6dn.mongodb.net/42?retryWrites=true&w=majority'

async function connect() {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

    const connection = mongoose.connection
    const users = connection.collection('users')
    const test = await users.find({}).toArray()
    console.log(test)
    // connection
  } catch (error) {
    console.log(error)
    await mongoose.connection.close()
  } finally {
    await mongoose.connection.close()
  }
}

connect()

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// // const { MongoClient } = require('mongodb')

// // const url = 'mongodb://46.61.59.223/'
// // const client = new MongoClient(url, { useUnifiedTopology: true })

// // client.connect(async (err) => {
// //   const db = client.db('42')
// //   console.log(db.collection('users'))
// // })

// const { MongoClient } = require('mongodb')

// async function connection() {
//
//   const client = new MongoClient(uri, { useUnifiedTopology: true })

//   const newUser = {
//     id: 1313,
//     first_name: 'Gant',
//     last_name: 'Thorby',
//     email: 'gthorby2r@earthlink.net',
//     ip_address: '237.234.54.42',
//     company: 'Brainverse'
//   }
//   try {
//     client.connect(async () => {
//       const users = await client.db('42').collection('users')
//       // await users.updateOne({ id: 1313 }, { $set: newUser }, { upsert: true })
//       // const result = await users.findOne({ id: 1313 })

//       await users.updateMany({ gender: 'F' }, { $set: { gender: 'Female' } }, { multi: true })
//       const result = await users.find({}).toArray()
//       console.log(result)
//     })
//   } catch (err) {
//     console.log(err)
//   } finally {
//     await client.close()
//   }
// }

// connection()
