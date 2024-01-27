const btnCart = document.querySelector('.contenedoriconocarrito');
const contenedorcarritoproductos = document.querySelector('.contenedorcarritoproductos');

btnCart.addEventListener('click', () =>{
    contenedorcarritoproductos.classList.toggle('carritoescondido')
});

const cartInfo = document.querySelector('.carritoproducto');
const rowProducto = document.querySelector('.rowproducto');

// Lista de todos los contenedores de productos //

const listaproductos = document.querySelector('.containeritems');

// Variable para almacenar productos // 

let allProducts = [ ];




const valorTotal = document.querySelector('.totalpagar');
const countProducts = document.querySelector('#contadordeproductos');








listaproductos.addEventListener('click', e =>{
    if (e.target.classList.contains('button') || e.target.classList.contains('button:lg') || e.target.classList.contains('button_text')) {
        const product = e.target.closest('.infoproducto');

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('.precio').textContent
        }

        const exists = allProducts.some(product => product.title === infoProduct.title);

        if (exists){
            const products = allProducts.map(product =>{
                if(product.title === infoProduct.title){
                    product.quantity++;
                    return product
                } else{
                    return product
                }
            })
            
            allProducts = [...products]
        } else{
            allProducts = [...allProducts, infoProduct]
        }

        showHTML();
    }
});

// Eliminar productos del carrito //

rowProducto.addEventListener('click', (e) =>{
    if(e.target.classList.contains('cerrarcarrito')){
       const product = e.target.parentElement
       const title = product.querySelector('p').textContent

       allProducts = allProducts.filter(product => product.title !== title )

       showHTML();
    }
})

// Funcion para mostrar el html //
const showHTML = () =>{

    // Limpiar  HTML //
    rowProducto.innerHTML=``;

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product =>{
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('carritoproducto');
        containerProduct.innerHTML = `
            <div class="infoproductoscarrito">
                <span class="cantidadproductoencarro">${product.quantity}</span>
                    <p class="nombreproductocarrito">${product.title}</p>
                <span class="precioproductocarrito">${product.price}</span>
            </div>
                               
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cerrarcarrito">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        
        `;

        rowProducto.append(containerProduct);

        total = total + parseFloat(product.quantity*product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;


    });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;

};
document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelectorAll('.link').forEach(function (link) {
        link.classList.toggle('active');
    });
});