import LoginSuccess from '../LoginSuccess'
import LoginFailed from '../LoginFailed'
import Login from '../Login'
import { PureComponent } from 'react'

const withLoginAuth = () => {
    return class extends PureComponent {
        constructor(props) {
            super(props)
            this.state = { isLogin: false }
        }

        setIsLogin() {
            this.setState({ isLogin: true })
        }

        render() {
            const { isLogin } = this.state
            return (
                <div>
                    {
                        (!isLogin)
                        ?<Login setIsLogin={() => this.setIsLogin()}/>
                        :(localStorage.getItem('token'))
                            ?<LoginSuccess />
                            :<LoginFailed />
                    }
                </div>
            )
        }
    }
}

export default withLoginAuth