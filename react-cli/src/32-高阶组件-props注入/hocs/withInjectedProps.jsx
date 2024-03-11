import { PureComponent } from "react";

const withInjectedProps = (Component) => {
    class NewComponent extends PureComponent {
        constructor(props) {
            super(props)
            this.state = {
                date: new Date().toLocaleString()
            }
        }

        render() {
            return (
                <div>
                    <Component 
                        {...this.props}
                        date={this.state.date}
                    />
                </div>
            )
        }
    }

    return NewComponent
}

export default withInjectedProps