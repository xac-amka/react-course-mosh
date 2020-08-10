import React, { Component, Fragment } from 'react';
import Counters from './components/counters'
import Navbar from './components/navbar'

export default class App extends Component {
    state = {
        counters: [
            {
                id: 1, 
                value: 4
            },{
                id: 2, 
                value: 0
            },{
                id: 3, 
                value: 0
            },{
                id: 4, 
                value: 1
            }
        ]
    }
    constructor () {
        super();
        console.log('App - Constructor');
    }

    componentDidMount() {
        // ajax call
        console.log('App - Mounted');
    }

    // https://www.youtube.com/watch?v=Ke90Tje7VS0&t=6475s - Removing the Local State
    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    }

    handleDelete = (counterId) => {
        // The component that owns a piece of the state, should be the one modifying it.
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters })
    }

    handleReset = () => {
        const counters =  this.state.counters.map(c=> {
            c.value = 0;
            return c
        })
        this.setState({ counters })
    }

    render(){
        console.log('App - Rendered')
        return(
            <Fragment>
                <Navbar totalCounters={this.state.counters.filter(c => c.value >0).length }/>
                <main className="container">
                    <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} />
                </main>
            </Fragment>
        )
    }
}