function add_to_cart(id)
{
    var pizzaID = 'Pizza ID# ' + id;
    var pizzaCount = window.localStorage.getItem(pizzaID);
        pizzaCount = pizzaCount * 1 + 1 //*1 для преобразования в числовой тип
    window.localStorage.setItem(pizzaID, pizzaCount);
}

