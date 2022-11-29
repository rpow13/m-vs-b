let B_score = 0
let M_score = 0
basic.showString("M VS B!!")
for (let index = 0; index <= 2; index++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(3 - index)
}
basic.showString("GO")
basic.pause(100)
basic.clearScreen()
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        if (Math.randomBoolean()) {
            basic.showLeds(`
                # . . . #
                # # . # #
                # . # . #
                # . . . #
                # . . . #
                `)
            basic.pause(100)
            if (input.buttonIsPressed(Button.A)) {
                M_score = M_score + 1
                if (input.buttonIsPressed(Button.B)) {
                    B_score = B_score - 1
                    basic.pause(100)
                }
            }
        } else {
            basic.showLeds(`
                # # # . .
                # . . # .
                # # # . .
                # . . # .
                # # # . .
                `)
            if (input.buttonIsPressed(Button.A)) {
                M_score = M_score - 1
                if (input.buttonIsPressed(Button.B)) {
                    B_score = B_score + 1
                    basic.pause(100)
                }
            }
        }
    }
    basic.showString("M Score:")
    basic.showNumber(M_score)
    basic.pause(100)
    basic.showString("B Score:")
    basic.showNumber(B_score)
})
