function getBMI(height, weight) {
            let bmi = weight / (height / 100) ** 2;
            return bmi;
        }
//取得評語
function getComment(bmi){
    if(bmi<18.5){
        return "體重過輕";
    }else if(bmi<24){
        return "健康體重!";
    }else if(bmi<27){
        return "體重過重";
    }else{
        return "你肥慘了..."
    }
}