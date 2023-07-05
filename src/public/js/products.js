const linkCart = document.getElementById('linkCart')
const renderProductsViews = document.getElementById("render-products");

const url = "/products";

let render = "";
const renderProduct = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      save = data;
      save.forEach((products) => {
        let hayStock = products.stock === 0
        // let cartButton = hayStock
        let selectOptions = hayStock
				? `<option value="NO STOCK">SIN STOCK</option>`
				: `<option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>`;
        render += `<div class="containProduct">

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
              <label for="cantidad">Cantidad:
              <select id="productQuantity" name="cantidad">
              ${selectOptions}
            </select>
              </label>
            
              </div>
              <button class="btnAgregar addToCart" id="${products._id}">
                Agregar al carrito
              </button>
            </div>
          </div>`;
      });
      renderProductsViews.innerHTML = render;

      let addToCartButton = document.querySelectorAll('.addToCart')
      let productQuantity = document.querySelectorAll("#productQuantity")
      addTocarFunction( addToCartButton, productQuantity)
    })
    .catch((error) => {
      renderProductsViews.innerHTML = cargarError(error);
    });
};

const addTocarFunction = ( AddButton, QuantityArray)=>{
  AddButton.forEach((button, index)=>{
    const selectElement = QuantityArray[index]
    let selecQuantity = selectElement.value

    selectElement.addEventListener("change",()=>{
      selecQuantity = selectElement.value
    })

    button.addEventListener("click",async()=>{
      try {
        const quantity = selecQuantity
        const options = {
          method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
          body: JSON.stringify({ quantity: parseInt(quantity) }),
        }
        await fetch(`/carts/${idCartUser}/productList/${button.id}`, options)

      } catch (error) {
        console.log(error)
      }
    })
  })
}

const reading = () => {
  Swal.fire({
    toast: true,
    title: "Obteniendo Datos ",
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
    timer: 2100,
  });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(renderProduct());
    }, 2100);
  });
};

const cargarError = () => {
  Swal.fire({
    toast: true,
    icon: "error",
    title: "Oops...",
    text: "Error al cargar el servidor, intente mas tarde!",
  });
};
reading();
