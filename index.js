const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config()
const cors = require('cors')
const app = express();
const port =process.env.PORT || 5000;


//middlewwar
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jgbqt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

console.log(uri);

async function run(){

    try{
       await client.connect();
      // console.log('database succesfully port run');

      const database = client.db('travelTour');
      const servicesCollection =database.collection('services');

      //POST API
      app.post('/services', async(req,res)=>{
         const service ={
            "name":"California",
         "title": "United State of America",
        "description":"California, a western U.S. state, stretches from the Mexican border along the Pacific for nearly 900 miles. Its terrain includes cliff-lined beaches" ,
       "image": "https://i.ibb.co/txsF10b/pexels-archie-binamira-672358.jpg" ,
       "cost":"1000",
       "rating": "5",
       "day": "9" 

         }
         const result = await servicesCollection.insertOne(service);
         console.log(result);
        

      })


    }
    finally{

    }

}


run().catch(console.dir);





app.get('/', (req, res)=>{
    res.send('travel server is in running')
});

app.listen(port,()=>{
    console.log('Server running at port');

})

/* 
 name travel

 passs 5xbHVAsV75oLGkTr
*/