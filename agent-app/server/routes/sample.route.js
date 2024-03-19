import express from 'express'
import SampleController from '../controllers/sample.controller.js'
import { spawn } from 'child_process';
//import shapePrediction from '../model/shapePrediction.py';

const router = express.Router()

router.get('/', SampleController.getAll)


router.get('/res', async(req, res) => {
    // const imagePath = req.query.imagePath;

    // if (!imagePath) {
    //     return res.status(400).send({ error: 'Missing image path parameter' });
    // }

    // try {
    //     const predictedShape = await shapePrediction.predictShape(imagePath);
    //     res.send({ predictedShape });
    // } catch (error) {
    //     console.error('Error during prediction:', error);
    //     res.status(500).send({ error: 'Failed to predict face shape' });
    // }



    const childPython = spawn("python", ["C:\\Users\\admin\\Desktop\\newrepo\\server\\model\\shapePrediction.py"])
    let data;
    childPython.stdout.on('data', (data) => {
        data = data.toString()
        console.log('stdout:', data.toString())
        res.send({
            data_object: data
        })
    })
    childPython.stderr.on('data', (data) => {
        data = data.toString()
        console.error('stderr:', data.toString())
        res.send({
            data_object: data
        })
    })
    
    childPython.on('close', (code) => {
    console.log('Child process exitted with code:', code)
    })
    
})

export default router