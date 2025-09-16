let led_x = 0
let led_y = 0
basic.forever(function () {
    led.unplot(led_x, led_y)
    led_x = Math.map(input.acceleration(Dimension.X), -1023, 1023, -1, 5)
    led_y = Math.map(input.acceleration(Dimension.Y), -1023, 1023, -1, 5)
    led.plot(led_x, led_y)
    if (led_y > 4 || led_x > 4 || (led_y < 0 || led_x < 0)) {
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
