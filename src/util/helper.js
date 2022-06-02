const pd=function printdate(){
    let currentDate = new Date()
    console.log(currentDate) 
}

const pm=function printmonth(){
    let currentdate = new Date()
    let currentMonth = currentdate.getMonth() + 1
    console.log('The current month is '+currentMonth)
}

const pb=function printbatch(){
    let batchInformation = 'Radon, W3D4, the topic for today is Nodejs module system assignment discussion'
  console.log(batchInformation)
}


module.exports.pd=pd
module.exports.pm=pm
module.exports.pb=pb
