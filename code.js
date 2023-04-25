function getResult(){
    const square = (number) => number ** 2; 

    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var result = weight / square(height/100);
    console.log(result);
    document.getElementById("result").innerHTML = 'Ваш ИМТ: ' + Math.round((result + Number.EPSILON) * 10) / 10;
}