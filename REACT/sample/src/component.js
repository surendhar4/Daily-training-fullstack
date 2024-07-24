import { Component } from "react"

class Demo extends Component
{
    constructor(props)
    {
        super(props);
        this.state={count:0}
    }
    increment=()=>{
        this.setState(prevstate=>({count:prevstate.count+1}))
    }
    render()
    {
        return(
            <div>
                This is from class component
                <button onClick={this.increment}>Increment</button>
                {this.state.count}
            </div>
        )
    }
}
export default Demo