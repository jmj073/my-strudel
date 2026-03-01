setcpm(30)

let scale = "G:major"

stack(
  sound("bd hh sd hh hh bd sd hh"),
  
  n("<[0,2,4] [4,6,8] [5,7,2] [2,4,6] [3,5,7] [0,2,4] [1,3,5,7] [4,6,8,3]>")
    .scale(scale)
    .s("piano")
    .lpf(1000),

    n(`<
      [6 4 7 9]
      [8@2 6@2]
      [7@2 6 5]
      [4@2 4@2]
      [5@2 4 3]
      [4@2 7@2]
      [5 7@2 9]
      [8@4]
    >`)
      .scale(scale)
      .sound("piano")
      .gain(2),
)