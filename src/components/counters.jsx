import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        const {onReset, onDelete, onIncrement, counters} = this.props;
        console.log('Counters - Rendered');
        return (
            <React.Fragment>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter => <Counter key={counter.id} onIncrement={onIncrement} onDelete={onDelete} counter={counter}/> )}
            </React.Fragment>
        )
    }
}

export default Counters;