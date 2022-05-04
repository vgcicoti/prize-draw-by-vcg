function draw() {
    let number = document.getElementById("drawNumber").value
    let chosenNumber = Math.round(Math.random() * number)
    document.getElementById("luckyNumber").innerHTML = chosenNumber
}