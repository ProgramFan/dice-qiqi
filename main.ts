input.onButtonPressed(Button.A, function () {
    basic.showString("Hello, I am QiQi")
    music.playMelody("C5 B C5 A G C5 B C5 ", 120)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . #
        `)
    music.playMelody("C5 F G B F E C5 A ", 120)
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
    basic.showString("Byebye")
    basic.clearScreen()
})
