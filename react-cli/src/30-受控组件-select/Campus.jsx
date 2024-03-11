import React, { PureComponent } from 'react'

export class Campus extends PureComponent {
    constructor() {
        super()
        this.state = {
            campus: 'yunfu'
        }
    }

    handelSelect(e) {
        this.setState(() => {
            return { campus: e.target.value }
        },() => console.log(this.state.campus))
    }

  render() {
    return (
        <select 
            value={this.state.campus}
            onChange={(e) => this.handelSelect(e)}
            name="campus" 
            id="campus"
        >
            <option value="guangzhou">广州校区</option>
            <option value="zhongshan ">中山校区</option>
            <option value="yunfu">云浮校区</option>
        </select>
    )
  }
}

export default Campus