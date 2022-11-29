basic.showString("M VS B!!")
for (let index = 0; index <= 2; index++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(3 - index)
}
basic.showString("GO")
basic.pause(100)
let round = 1
let B_score = 0
let M_score = 0
basic.clearScreen()
basic.forever(function () {
    basic.showString("Round")
    basic.showNumber(round)
    for (let index = 0; index <= 4; index++) {
        if (Math.randomBoolean()) {
            basic.showLeds(`
                # . . . #
                # # . # #
                # . # . #
                # . . . #
                # . . . #
                `)
            basic.pause(400)
            if (input.buttonIsPressed(Button.A)) {
                M_score += 1
                basic.showIcon(IconNames.Yes)
            }
            if (input.buttonIsPressed(Button.B)) {
                B_score += -1
                basic.showIcon(IconNames.No)
            }
            basic.pause(400)
        } else {
            basic.showLeds(`
                # # # . .
                # . . # .
                # # # . .
                # . . # .
                # # # . .
                `)
            basic.pause(400)
            if (input.buttonIsPressed(Button.A)) {
                M_score += -1
                basic.showIcon(IconNames.No)
            }
            if (input.buttonIsPressed(Button.B)) {
                B_score += 1
                basic.showIcon(IconNames.Yes)
            }
            basic.pause(400)
        }
        basic.clearScreen()
        basic.pause(200)
    }
    round += 1
    basic.showString("M:")
    basic.showNumber(M_score)
    basic.pause(100)
    basic.showString("B:")
    basic.showNumber(B_score)
    if (M_score > B_score) {
        basic.showString("M wins!")
    } else if (B_score > M_score) {
        basic.showString("B wins!")
    } else {
        basic.showString("TIE!")
    }
    basic.pause(5000)
})
