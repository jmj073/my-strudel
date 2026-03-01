setcpm(60)

let bam = n("<[0 - - 1] - [2 - - 1] ->")
        .scale("F#:minor")
        .sound("gm_violin")
        .legato(0.6)
        .room(.5)

stack(
    sound("bd hh sd hh").bank("RolandTR909").gain(1.2),
    bam.add(note(24)),
    bam.add(note(12)),
    n("[3 0 2 3 2 0 -1 0]/2")
        .scale("F#:minor")
        .sound("gm_synth_bass_1")
        .legato(0.5)
)