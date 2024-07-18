import express from 'express'
import SampleController from '../controllers/sample.controller.js'
import { spawn } from 'child_process';
//import shapePrediction from '../model/shapePrediction.py';

const router = express.Router()

router.get('/', SampleController.getAll)


router.get('/res', async(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Allow requests from your frontend origin
    
    const childPython = spawn("python", ["model\\shapePrediction.py"])//"C:\\Users\\admin\\Desktop\\Nilupul Nakandala\\IIT\\class\\2nd Year (Level 5)\\2nd Semester\\SDGP\\GrooveOn-Hairstyle-recommendation-\\agent-app\\server\\model\\face_shape_classifier.joblib"
    let data;
    childPython.stdout.on('data', (data) => {
        data = data.toString()
        console.log('stdout:', data.toString())
        const predictionOutput = data;
        res.json({predictionOutput});
        // res.send({
        //     data_object: data
        // })
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