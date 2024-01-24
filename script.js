function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegando a imagem
  const img = document.querySelector("#profile img")
  //substituindo o src da imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Retrato Circular meu usando uma jaqueta azul, foto feita de perfil com mão no queixo, fundo estourado para dar constraste."
    )
  } else {
    img.setAttribute("src", "assets/avatar.png")
    img.setAttribute(
      "alt",
      "A imagem mostra um ambiente interno com um teto visível,A pessoa está vestindo uma camiseta azul com detalhes em preto. Está segurando um café na mão direita, foto de perfil."
    )
  }
}
