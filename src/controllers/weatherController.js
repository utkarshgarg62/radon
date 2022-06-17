let axios = require("axios")


let getWeather = async function (req, res) {

    try {
        let q = req.query.q
        let appid = req.query.appid
        console.log(`query params are: ${q} ${appid}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result.data)
        let temperature=result.data.main.temp
        res.status(200).send({ msg: temperature })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getWeather=getWeather



let getSortedCities = async function (req, res) {

    try {
      
        let cities= ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray=[]
        for(i=0;i<cities.length;i++){
            let obj={city:cities[i]}
            let resp= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=aa0e32c6ec21a9e884acbe2c62cca5fe`)
            console.log(resp.data.main.temp)
            obj.temp=resp.data.main.temp
            cityObjArray.push(obj)
        }
        //res.send(cityObjArray)
        let sorted = cityObjArray.sort(function(a,b){return a.temp - b.temp})
        console.log(sorted)
        res.status(200).send({status:true,data:sorted})
    
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getSortedCities=getSortedCities