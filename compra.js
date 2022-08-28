const form = document.querySelector("#form")
form.addEventListener(`submit`, handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    const formulario = new FormData (this)
    console.log(formulario.get(form))
}
const enviar = document.querySelector("#compra");
enviar.addEventListener("click", () => {
swal({
    title: "Compra realizada",
    text: "Muchas gracias por su compra!",
    icon: "success",
  })});