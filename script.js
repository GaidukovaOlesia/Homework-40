// Написати функцію generateList(array),
// яка приймає масив із чисел та масивів чисел (наприклад [1,2, 3])
// і генерує список з елементів:
debugger;
const array = [1, 2, 3, 4, 5, [1, 2, 3, [1.1, 1.2, 1.3, 1.4, 1.5,], 4, 5, 6,], 7, 8];


function generateList(array) {
   const ul = document.createElement("ul");

    array.forEach(el => {
        const li = document.createElement("li");
        let childElement;

        if (Array.isArray(el)) {
            childElement =  generateList(el);
        } else {
            childElement = document.createTextNode(el);

        }

        li.appendChild(childElement);
        ul.appendChild(li);
    })

        return ul;

}
document.body.appendChild(generateList(array));
