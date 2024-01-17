const chooseColor = document.querySelectorAll('.choose__color-btn');
const contentItem = document.querySelectorAll('.content-item');

chooseColor.forEach(function(element) { //отслежую событие по всем элементам
    element.addEventListener("click", open) // принимает в себя результат функции open
});

function open(e) {
    const target = e.currentTarget; // метод currentTarget находим элемент на кторый кликнули
    const button = target.dataset.button; // dataset нужен для того, чтобы достать data-buttnon и добавить клас актив в contentActiv на нажатый элемент
    const contentActiv = document.querySelectorAll(`.${button}`); // `.${button}`

    chooseColor.forEach(function(item){
        item.classList.remove('choose__color-btn--active');
    })

    target.classList.add('choose__color-btn--active'); // добавляем класс, но перед эти удаляем у всех у кого но есть

    contentItem.forEach(function(item){
        item.classList.remove('content-item__active')
    });

    contentActiv.forEach(function(item){ // тут добавляем каждому content-item__active, а перед этим мы его убрали
        item.classList.add('content-item__active')
    });
}