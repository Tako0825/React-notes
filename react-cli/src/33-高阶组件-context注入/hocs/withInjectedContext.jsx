import { PureComponent } from 'react'
import ThemeContext from '../contexts/themeContext'

const withInjectedContext = (Component) => {
    class NewComponent extends PureComponent {
        render() {
            return (
                <ThemeContext.Consumer>
                    {
                        value => (
                            <Component 
                                {...this.props}
                                {...value}
                            />
                        )
                    }
                </ThemeContext.Consumer>
            )
        }
    }

    return NewComponent
}

export default withInjectedContext