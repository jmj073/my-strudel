setcpm(25)

stack(
    sound("bd bd sd [- sd] [- sd] bd sd -, hh*8").gain(1.2),
    n("0 7 8 [0 0] [0 7] [- 8] [- 0] [0 0]")
        .scale("E:minor")
        .sound("gm_electric_guitar_clean")
        .legato(0.5)
        .distort(2)
        .room(1)
)


