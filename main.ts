basic.forever(function () {
    if (input.compassHeading() > 355 || input.compassHeading() < 5) {
        basic.showArrow(ArrowNames.North)
    }
})
