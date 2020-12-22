const request = require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=f0f95b11474cfa210b920fba80ded7e1&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)
   

    request({url:url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to Connect to wether service')
    
        }
        else if(body.error){
            callback('Unable to find location')
    
        }
        else{
            callback(undefined,{

        
     
                Summary : body.current.weather_descriptions[0],
                temperature : body.current.temperature,
                Rainchance :  body.current.precip
     
     
                      
     
            })
        }
       
    })

}

module.exports = forecast




