input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    soundExpression.hello.play()
    basic.showString("hello")
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
})
music.setBuiltInSpeakerEnabled(true)
basic.showIcon(IconNames.Happy)
