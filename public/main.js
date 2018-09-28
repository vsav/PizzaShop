function add_to_cart(id)
{
    var pizzaID = 'Pizza ID# ' + id;
    var pizzaCount = window.localStorage.getItem(pizzaID);
        pizzaCount = pizzaCount * 1 + 1 //*1 для преобразования в числовой тип
    window.localStorage.setItem(pizzaID, pizzaCount);
    var cartAmount = 0
    for (var i = 0; i < localStorage.length; i++)   {
        cartAmount = cartAmount + localStorage.getItem(localStorage.key(i)) * 1;
    }
    document.getElementById('total').innerHTML = cartAmount;
}

function cartTotal(){
    var cartAmount = 0
    for (var i = 0; i < localStorage.length; i++)   {
        cartAmount = cartAmount + localStorage.getItem(localStorage.key(i)) * 1;
    }
    document.getElementById('total').innerHTML = cartAmount;
}
