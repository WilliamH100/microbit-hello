input.onButtonPressed(Button.A, function () {
    soundExpression.hello.play()
    basic.showString("hello")
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
})
music.setBuiltInSpeakerEnabled(true)
basic.showIcon(IconNames.Happy)
