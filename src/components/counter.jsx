import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,
    //     tags: ['tag1', 'tag2', 'tag3']
    //     // imageUrl: 'https://picsum.photos/200'
    // };

    // constructor() {
    //     super();
    //     console.log('Constructor', this);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // renderTags(){
    //     if(this.state.tags.length === 0) return <p>Tag list is empty</p>;
    //     return <ul> { this.state.tags.map(tag => <li key={tag}> {tag}</li>) } </ul>;
    // }

    // handleIncrement = () => {
    //     this.setState({ value: this.state.value + 1 })
    //     // obj.method(); // property has an access
    //     // function(); // propert hasn't an access
    // }

    // if you are sending function just send name without parenthesis, if you are using function then go with parenthesis

    componentDidUpdate(prevProps, prevStates) {
        console.log('prevProps', prevProps);
        console.log('prevStates', prevStates);
        // We can make request to ajax server based on state or props change
        if(prevProps.counter.value !== this.props.counter.value) {

        }
    }

    componentWillUnmount(){
        console.log('Counter - Unmount')
    }

    render() {
        console.log('Counter - Rendered');
        return (
            <div>
                {/* <img src={imageUrl} alt="" /> */}
                <span className={this.getBadgeClasses()}> {this.formatCount() } </span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                {/* {this.state.tags.length === 0 && 'Add new tag!'}
                {this.renderTags()} */}
            </div>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value) === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;