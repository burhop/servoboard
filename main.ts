input.buttonA.onEvent(ButtonEvent.Click, function () {
    for (let index = 0; index < 4; index++) {
        light.setAll(0xff0000)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, 0, PCA9685.chipAddress("0x40"))
        pause(1000)
        light.setAll(0x00ff00)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, 180, PCA9685.chipAddress("0x40"))
        pause(1000)
    }
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    PCA9685.reset(PCA9685.chipAddress("0x40"))
})
pins.A1.analogSetPeriod(60)
pins.A2.analogSetPeriod(60)
forever(function () {
    crickit.signal1.digitalWrite(pins.SCL.digitalRead())
    crickit.signal2.digitalWrite(pins.SDA.digitalRead())
})
