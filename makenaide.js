setcpm(30)
stack(
    sound("bd hh sd hh hh bd sd hh, hh*8"),
    n(`
        <0 4 5 2 3 0 1 4>*2,
        <2 6 7 4 5 2 3 6>*2,
        <4 1 2 6 7 4 5 1>*2,
        <- - - - - - 7 3>*2
    `)
        .scale("G:major")
        .sound("piano"),
    n(`<
        [6 4 7 9 8@2 6@2]
        [7@2 6 5 4@2 4@2]
        [5@2 4 3 4@2 7@2]
        [5 7@2 9 8@4]
    >`)
        .scale("G:major")
        .sound("piano"),
)