function toggleMode(){
  const html = document.documentElement

html.classList.toggle('light')


// pegar a tag img

// substituir a imagem

//se tiver light mode add imagem light

// matenha a imagem normal no dark mode

const img = document.querySelector("#profile img")
if(html.classList.contains('light')){

  img.setAttribute("src", "./assets/assets/avatar-light.png")

} else {
  img.setAttribute("src", "./assets/assets/Avatar.png")
}
}
