input.onButtonPressed(Button.A, function () {
    input.calibrateCompass()
    basic.showArrow(ArrowNames.South)
})
basic.showString("Press \"A\" to find target OR Press \"B\" to Attack. A+B = Shoot")
