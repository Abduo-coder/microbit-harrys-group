def on_button_pressed_a():
    radio.send_number(181)
    pins.servo_write_pin(AnalogPin.P1, 90)
    pins.servo_write_pin(AnalogPin.P2, 90)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    radio.send_number(181)
    pins.servo_write_pin(AnalogPin.P1, 90)
    pins.servo_write_pin(AnalogPin.P2, 180)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    radio.send_number(181)
    pins.servo_write_pin(AnalogPin.P1, 180)
    pins.servo_write_pin(AnalogPin.P2, 180)
input.on_button_pressed(Button.B, on_button_pressed_b)

radio.set_group(181)
basic.show_leds("""
    . # # # .
        # . . # #
        # # . . #
        . # . # #
        . # # # .
""")