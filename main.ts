input.onButtonPressed(Button.A, function () {
    basic.showString("" + input.temperature() + "°C")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.temperature() * 9 / 5 + 32) + "°F")
})
basic.showString("Thermometre:A=Celsius  B=Fahrenheit ")
basic.forever(function () {
	
})
