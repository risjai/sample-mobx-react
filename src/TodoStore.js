import { autorun, observable, computed } from "mobx"


class Todo {
    @observable value
    @observable id
    @observable complete

    constructor(value) {
        this.value = value
        this.id = Date.now()
        this.complete = false
    }

}

class TodoStore {

    @observable todos = []

    @observable filter = ""

    @computed get fn() {
        console.log(this.todos.map(
            item => item.length
        ))
    }

    @computed get filteredTodos() {
        var matchesFilter = new RegExp(this.filter, "i") //Case insensitive
        return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
    }

    createTodo(val) {
        this.todos.push(new Todo(val))
    }
}

autorun(() => {
    console.log(store.fn)
    console.log(store.todos[0])
})

var store = window.store = new TodoStore

export default store
// export default new TodoStore
