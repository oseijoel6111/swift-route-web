const index = async(req, res)=>{
    res.send('Hello')
}

const create = async(req, res)=>{
    try {
        const {url} = req.body;

        
        res.send({
            'key': 'w5f6',
            'long_url': url,
            'short_url': `${url}/w5f6`
        })
    } catch (error) {
        return res.send({'message' : error})
    }
}

const remove = async(req, res)=>{
    try {
        res.send(req.body)  
    } catch (error) {
        return res.send(error)
    }
}

module.exports = {
    index,
    create,
    remove
}