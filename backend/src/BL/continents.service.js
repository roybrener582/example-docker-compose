
  exports.getContinents =  async function (req, res){
        const continents = [
            {
                "code": "AF",
                "name": "Africa"
            },{
                "code": "AN",
                "name": "Antarctica",
            }
        ]
        res.json({ result: continents, success: true })
    }



