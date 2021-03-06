let borrar = require('../erase');
const tasksType = require('../tasks');



const check = {
    init() {
        console.log('Hola bundle!!');
        $('#todo-form').submit(check.addTodo);
        $('#active').click(tasksType.active);
        $('#finish').click(tasksType.finish);
        $('#active').dblclick(tasksType.allTasks);
        $('#finish').dblclick(tasksType.allTasks);


    },
    addTodo(event) {
        event.preventDefault();
        const { value: todo } = document.getElementById('todo');

        let todoId = `todo-${check.counter + 1}`;
        let buttonData = `todo-${check.counter + 1}`;

        const $todoContainer = $('<div />').addClass('col s12 m12 todo');
        const $todoCard = $('<div />').addClass('card-panel');
        const $todoCheckbox = $('<input type="checkbox" />').addClass('all-tasks').attr('id', todoId);
        const $todoText = $('<label />').attr('for', todoId).text(todo);
        const $row = $("<div />").addClass("row");
        const $erase = $("<a />").addClass("col s2 m2 btn right").text("x").click(borrar);

        $row.append($erase);
        $todoCard.append($row);
        $todoCard.append($todoCheckbox);
        $todoCard.append($todoText);
        $todoContainer.append($todoCard);

        $('#todos').append($todoContainer);
        document.getElementById("todo").value = "";//Limpiando textArea.
        check.counter = check.counter + 1;

    },
    counter: 0

};

module.exports = check;
