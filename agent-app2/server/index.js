import express from 'express'
import SampleRoute from './routes/sample.route.js'

const app = express()
app.use(express.json())

app.use('/get-item', SampleRoute)

app.listen(3000, () => {
    console.log('Server Started. App is running on port 3000')
})
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/get-item/res', (req, res) =>{
//     res.send("stdout: round");
// });