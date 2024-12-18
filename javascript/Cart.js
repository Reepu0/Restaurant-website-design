

// console.log(document.querySelectorAll('.price')[index].value);
document.addEventListener('DOMContentLoaded', () =>{
    let addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cartItemCount = document.querySelector('.cart-icon span')
    let cartItemList = document.querySelector('.cart-items')
    let cartItemTotal = document.querySelector('.cart-total')
    let cartItemIcon = document.querySelector('.cart-icon')
    let sidebar = document.getElementById('sidebar');

    let cartItems = [];
    let totalAmount = 0;

    addToCartButtons.forEach((button, index) =>{
        button.addEventListener('click', () => {
        const item = {
            name: document.querySelectorAll('.card--title')[index].value,
            price: parseFloat(
                document.querySelectorAll('.price')[index].value,
            ),
            quantity: 1,
        };
        
        const existingItem = cartItems.find(
            (cartItem) => cartItem.name === item.name,
        );
        if (existingItem) {
            existingItem.quantity++;
        }else{
            cartItems.push(item);
            }

            totalAmount +=item.price;

            updateCartUI()
        });

        function updateCartUI(){
            updateCartItemCount(cartItems.length);
            updateCartItemList();
            updateCartTotal();
        }

        function updateCartItemCount(count){
            cartItemCount.value = count;
        }

        function updateCartItemList() {
            cartItemList.innerHTML = '';
            cartItems.forEach((item, index) => {
                const cartItem = document.createElement('div')
                cartItem.classList.add('cart-item', 'individual-cart-item');
                cartItem.innerHTML = `
                <span>(${item.quantity}x)${item.name}</span>
                <span class="cart-item-price">$${(item.price * item.quantity).toFixed(
                    2,
                )}
                <button class="remove-btn" data-index="${index}"><i class="fa-solid fa-times"</i></button>
                </span>
                `;

                cartItemList.append(cartItem);
            });

            const removeButtons = document.querySelectorAll('.remove-item')
            removeButtons.forEach((button) => {
                button.addEventListener('click', (event) => {
                    const index = event.target.dataset.index;
                    removeItemFromCart(index);
                });
            });
        }

        function removeItemFromCart(index){
            const removedItem = cartItems.splice(index, 1)[0];
            totalAmount -= removedItem.price * removedItem.quantity;
            updateCartUI();
        }

        function updateCartTotal(){
            cartItemTotal.value = `$${totalAmount.toFixed(2)}`;
        }

        cartItemIcon.addEventListener('click', () => {
            sidebar.classList.toggle('open')
        });

        let closeButton = document.querySelector('.sidebar-close');
        closeButton.addEventListener('click', () => {
            sidebar.classList.remove('open');
        })
    });
});