
function Calculate(){
    let Weight = document.getElementById('weightData')
    let Height = document.getElementById('heightData')
   
    let WeightValue = parseFloat(Weight.value)
    let HeightValue = parseFloat(Height.value)

    let heightinM = HeightValue/100

    let BMI = WeightValue / (heightinM*heightinM)
    document.getElementById("result").innerHTML=BMI.toFixed(2);
}
