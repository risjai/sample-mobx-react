import React from 'react'
import { observer } from 'mobx-react'


@observer
export default class TodoList extends React.Component {

    doFilter(e) {
        this.props.store.filter = e.target.value
    }

    createNew(e) {
        if(e.which == 13) {
            this.props.store.createTodo(e.target.value)
            e.target.value = ""
        }
    }

    render() {
        const {filter, todos, filteredTodos} = this.props.store;

        const todoList = filteredTodos.map( todo =>
        <li key={todo.id}>{todo.value}</li>
        )
        return(<div>
            <h1>todos</h1>
            {/* {filter} */}
            <input className="create" onKeyPress={this.createNew.bind(this)} />
            <input className="filter" value={filter} onChange={this.doFilter.bind(this)} />
            <ul>{todoList}</ul>
            </div>
        )
    }
}