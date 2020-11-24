def on_button_a_click():
    for index in range(4):
        light.set_all(0xff0000)
        PCA9685.set_servo_position(PCA9685.ServoNum.SERVO1, 0, 64)
        pause(1000)
        light.set_all(0x00ff00)
        PCA9685.set_servo_position(PCA9685.ServoNum.SERVO1, 180, 64)
        pause(1000)
input.button_a.on_event(ButtonEvent.CLICK, on_button_a_click)

def on_button_b_click():
    PCA9685.reset(64)
input.button_b.on_event(ButtonEvent.CLICK, on_button_b_click)

def on_forever():
    crickit.signal1.digital_write(pins.SCL.digital_read())
    crickit.signal2.digital_write(pins.SDA.digital_read())
forever(on_forever)
