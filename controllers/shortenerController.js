const {shortenUrl} = require('../utils/url_generate')
const {Url} = require('../models')

const index = async(req, res)=>{
    res.send('Hello')
}

const create = async(req, res)=>{
    try {
        const {url} = req.body;
        if(!url) return res.status(404).json({'msg': 'Url required', 'statusCode': 404})
        let record = await Url.findOne({where: {long_url : url} })
        if(record !== null)
           return res.status(200).json(record)
        const {key, long_url, short_url} = await shortenUrl(url, req)
        record = await Url.create({key:key, long_url:long_url, short_url:short_url})
        res.status(201).json({key, short_url, long_url})

    } catch (error) {
        return res.status(404).json({'message' : error, 'status': 404})
    }
}

const remove = async(req, res)=>{
    try {
        res.send(req.body)  
    } catch (error) {
        return res.send(error)
    }
}

const accessURL = async(req, res)=>{
    try {
        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        console.log(fullUrl);
        res.send("Done")
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    index,
    create,
    remove,
    accessURL
}