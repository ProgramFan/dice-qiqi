def on_button_pressed_a():
    music.play_melody("C5 B C5 A G C5 B C5 ", 120)
    basic.show_leds("""
        . . # . .
                . # . # .
                # . . . #
                . # . # .
                . . # . #
    """)
    music.play_melody("C5 F G B F E C5 A ", 120)
    basic.show_icon(IconNames.YES)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)
