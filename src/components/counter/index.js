import React, { useEffect, useState } from "react";
import Count from "./count";
import WindowWidth from "./windowWidth";
import observable from "../../patterns/observable";


// export default class Counter extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count : 0,
//             width : 0
//         }
//     }
    
//     componentDidMount() {
//         this.handleResize();
//         window.addEventListener("resize", this.handleResize.bind(this));
//     }
    
//     componentWillUnmount() {
//     }

//     increment() {
//         this.setState({ count: this.state.count  + 1 })
//     }

//     decrement() {
//         this.setState({ count : this.state.count - 1 })
//     }

//     handleResize() {
//         this.setState({ width: window.innerWidth });
//     }

//     render() {
//         return (
            
//         )
//     }
// }


function useCounter() {
    const [count , setCount] = useState(0);

    const increment = () => {
        observable.notify('hello roocket');
        setCount(count + 1)
    }
    const decrement = () => setCount(count - 1)

    return { count , increment , decrement }
}

function useWindowWidth() {
    const [width, setWidth ] = useState(0);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    })

    return width
}

export default function Counter() {
    const counter = useCounter();
    const width = useWindowWidth();
    
    return (
        <div className="App">
            <Count
                count={counter.count} 
                increment={counter.increment}
                decrement={counter.decrement}
            />
            <hr />
            
            <WindowWidth width={width} />
        </div>
    )
}