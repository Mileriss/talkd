window.sr = ScrollReveal({reset: true}) //Declaração da API

// TITULOS E SUBTITULOS
sr.reveal('.titulo-principal', {duration: 1500}) //Declaração da classe e a duração do efeito
sr.reveal('.sub-titulo', {duration: 2000})

// TEXTOS
// Principal
sr.reveal('.txt-principal', {
    rotate: {x: 0, y: 20, z: 0},
    duration: 1500
})

//Listas
sr.reveal('.txt-listas',{duration: 1500})

//Grids
sr.reveal('.txt-grid', {duration: 1500})

//BACKGROUNDS
sr.reveal('.bloco-background', {duration: 1000})