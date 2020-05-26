input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("johanes er den bedste lære")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("jeg ælsker skole")
})
let lys = 0
let pligt = 0
pligt += 0
basic.forever(function () {
    while (pligt < 1022) {
        pins.analogWritePin(AnalogPin.P0, pligt)
        pligt = pligt + 1
        basic.pause(10)
    }
    while (pligt > 0) {
        pins.analogWritePin(AnalogPin.P0, pligt)
        pligt = pligt + 1
        basic.pause(10)
    }
})
basic.forever(function () {
    lys = pins.analogReadPin(AnalogPin.P0)
    if (lys > 200) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        basic.showLeds(`
            # # # . .
            . # # # .
            . . # # .
            . # # # .
            # # # . .
            `)
    }
})
