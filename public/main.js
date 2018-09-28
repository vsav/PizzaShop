function add_to_cart(id)
{
    //добавление пицц в корзину

    var pizzaID = 'Pizza ID# ' + id;
    var pizzaCount = window.localStorage.getItem(pizzaID);
        pizzaCount = pizzaCount * 1 + 1 //*1 для преобразования в числовой тип
    window.localStorage.setItem(pizzaID, pizzaCount);

    //выводим количество пицц из корзины (результат выполнения функции cartTotal() в HTML элемент с id total

    document.getElementById('total').innerHTML = cartTotal();
}

// считаем общее количество пицц в корзине и выводим в HTML элемент с id total

function cartTotal() {
    var cartAmount = 0
    for (var i = 0; i < localStorage.length; i++) {
        cartAmount = cartAmount + localStorage.getItem(localStorage.key(i)) * 1;
        document.getElementById('total').innerHTML = cartAmount;
        return cartAmount;
    }
}
