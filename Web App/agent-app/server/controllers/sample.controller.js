const SampleController =  {
    getAll: ('/', (req, res) => {
        res.json({message: 'These are the items'})
    })
}

export default SampleController