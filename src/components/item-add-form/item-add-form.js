import { Component } from 'react';

import './item-add-form.css';


class ItemAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            placeholder: 'Добавьте дело...',
            inputClasses: 'form-control'
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {text} = this.state;
        if (text.length > 3) {
            this.props.onAddTodo(text);
            this.setState({
                placeholder: 'Добавьте дело...',
                inputClasses: 'form-control'
            })
        } else {
            this.setState({
                placeholder: 'Вы ничего не написали...',
                inputClasses: 'form-control warning'
            })   
        }
        this.setState({
            text: ''
        });
    }

    onAddTodo = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    render () {
        const {text, placeholder, inputClasses} = this.state;


        return (
            <form className='item-add-form' onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    className={inputClasses} 
                    placeholder={placeholder}
                    name='text'
                    value={text}
                    onChange={this.onAddTodo} />
                <button 
                    type='submit' 
                    className='btn btn-outline-light w'>Добавьте todo</button>
            </form>
        )
    }
}


export default ItemAddForm;