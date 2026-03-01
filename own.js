setcpm(30)

let scale = "C:major"

stack(
  sound("bd hh sd hh bd bd sd hh"),
  
  n("<[3,5,7] [4,6,8] [2,4,6] [5,7,9]>")
    .scale(scale)
    .s("piano")
    .jux(rev),

  n(`<
    [6 [- 0] [3 0] [5 4]]
    [[- 4] [3 1] [- 1] [5 1]]
    [6 [- 0] [3 0] [5 6]]
    [[- 9] [7 5] - -]
  >`)
    .scale(scale)
    .s("piano")
    .gain(2)
)