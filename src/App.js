import React, {Component} from 'react';

const App = () => (<Counter />);

class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }

    handlePlusButton = () => {
        const currentCount= this.state.count
        this.setState({count: currentCount + 1})
    }

    handleMinusButton = () => {
        const currentCount = this.state.count
        this.setState({count: currentCount - 1})
    }

    render() {
        return (
            <>
                <div>count: {this.state.count}</div>
                <button onClick={this.handlePlusButton}>+1</button>
                <button onClick={this.handleMinusButton}>-1</button>
            </>
        )
    }
}

export default App;
