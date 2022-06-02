const t=function trim(){
    let text1 = "       functionUp        ";
    let result1 = text1.trim();
    console.log(result1)
}

const lc=function changetoLowerCase(){
    let text2 = "functionUp";
    let result2 = text2.toLowerCase();
    console.log(result2)

}

const uc=function changeToUpperCase(){
    let text3 = "functionUp";
    let result3 = text3.toUpperCase();
    console.log(result3)
}


module.exports.t=t
module.exports.lc=lc
module.exports.uc=uc