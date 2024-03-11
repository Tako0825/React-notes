import { PureComponent } from "react";

const withInjectedProps = (Component) => {
    class NewComponent extends PureComponent {
        constructor() {
            super()
            this.state = {
                date: new Date().toLocaleString()
            }
        }

        render() {
            return (
                <div>
                    <Component />: {this.state.date}
                </div>
            )
        }
    }

    return NewComponent
}

export default withInjectedProps