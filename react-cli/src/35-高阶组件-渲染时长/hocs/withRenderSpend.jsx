import { PureComponent } from "react";

const withRenderSpend = (Component) => {
    return class extends PureComponent {
        constructor() {
            super() 
            this.state = {
                time: 0
            }
        }

        UNSAFE_componentWillMount() {
            this.setState({ time: new Date() })
        }

        componentDidMount() {
            const spend = new Date() - this.state.time
            console.log(`组件${Component.name}渲染消耗了${spend}ms`);
        }
        
        render() {
            return (
                <Component/>
            )
        }
    }
}

export default withRenderSpend