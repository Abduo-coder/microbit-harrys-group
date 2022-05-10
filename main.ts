radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 657) {
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.servoWritePin(AnalogPin.P2, 0)
    }
    if (receivedNumber == 296) {
        pins.servoWritePin(AnalogPin.P1, 180)
        pins.servoWritePin(AnalogPin.P1, 180)
    }
    if (receivedNumber == 740) {
        pins.servoWritePin(AnalogPin.P1, 180)
        pins.servoWritePin(AnalogPin.P2, 0)
    }
    if (receivedNumber == 819) {
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.servoWritePin(AnalogPin.P2, 180)
    }
    if (receivedNumber == 910) {
        pins.servoWritePin(AnalogPin.P1, 90)
        pins.servoWritePin(AnalogPin.P2, 90)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(657)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(740)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(296)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(910)
})
radio.setGroup(181)
basic.showLeds(`
    . . . . .
    # # # # #
    # . . . #
    . # . # .
    . . # . .
    `)
