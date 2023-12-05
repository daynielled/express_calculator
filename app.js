const express = require('express');
const app = express();
const { calculateMean, calculateMedian, calculateMode, handleErrors } = require('./helpers');
const ExpressError = require('./expressError');


app.get('/mean', handleErrors,(req,res,next) => {
    const {numbers} = req;
    const mean = calculateMean(numbers).mean;

    res.json({operation: 'mean', value: mean});
});

app.get('/median', handleErrors,(req,res,next) => {
    const {numbers} = req;
    const median = calculateMedian(numbers).median;

    res.json({operation: 'median', value: median});
});

app.get('/mode', handleErrors,(req,res,next) => {
    const {numbers} = req;
    const mode = calculateMode(numbers).mode;

    res.json({operation: 'mode', value: mode});
});

app.use((req,res,next) =>{
    next(new ExpressError('Page not found', 404))
});

app.use((err,req,res,next) =>{
    if (err instanceof ExpressError){
        res.status(err.status).json({error: err.message});
    }else{
        res.status(500).json({error:'Internal Server Error'});
    }
})

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`)
});