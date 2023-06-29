const menos = document.getElementById('btnMenos')
const mas = document.getElementById('btnMas')
const stock = document.getElementById('stock')
const count = document.getElementById('quantity')


const renderProductsViews = document.getElementById('render-products')

const url = '/products'

function crearCards(products){
  return `<div class="containProduct">

   <div class="img">
         <img src="${products.thumbnails}" alt="imagen">
       </div>
       <div class="info">
         <p>${products.title}</p>
         <p>${products.description}</p>
         <p>Codigo:${products.code}</p>
         <p>Precio: ${products.precio}</p>
         <p id="stock:">Stock:${products.stock}</p>
       </div>
       <div class="containAgregar">
         <div class="cantidad">
            <button id="btnMenos">-</button>
                 <span id="quantity"></span>
             <button id="btnMas">+</button>
         </div>
         <button class="btnAgregar" id="addToCart${products._id}">
           Agregar al carrito
         </button>
       </div>
     </div>`
}


let render = ""
const renderProduct = ()=>{
  fetch(url)
    .then((response)=>response.json())
    .then((data) => {
      save = data
      save.map(products => {
        render += crearCards(products)
        console.log(products.thumbnails,'front')
      });
      renderProductsViews.innerHTML = render
    })
    .catch((error)=>{
      renderProductsViews.innerHTML = cargarError(error)
    })
  
}

const reading = () =>{
  Swal.fire({
    toast:true,
    title:'Obteniendo Datos ',
    showConfirmButton: false,
    didOpen:()=>{
        Swal.showLoading()
    },
    timer:2100,
})
return new Promise((resolve, reject)=>{
  setTimeout(() => {
      resolve(renderProduct())
  }, 2100);
})
}

const cargarError = ()=>{
  Swal.fire({
          toast:true,
          icon: 'error',
          title: 'Oops...',
          text: 'Error al cargar el servidor, intente mas tarde!',
      }
    )
}
reading()