const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

function setProb(){
    if (process.argv.length<=2) return 0.5;
    let x=process.argv[2];
    if (x<=0 || x>=1){
        console.log("node index.js <probablity of error>")
        throw new Error("Error Probablity must be between 0 and 1 exclusively")
    }
    return x;
}
const prob_error=setProb()
console.log(`Probability of throw a 500 Error: ${prob_error}`)


app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/echo',(req,res) => {
    if ( Math.random() < prob_error ){
        console.log("... random error ...")
        res.status(500).json({ error: 'random error' })
        return;
    }
    res.status(200).json(req.query)
})
app.listen(3000)
