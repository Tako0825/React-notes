import React, { forwardRef } from 'react'

const HelloReact = forwardRef((props, ref) => {
    return (
        <div>
            <h2 ref={ref}>HelloReact</h2>
            <p>hello world.</p>
        </div>
    )
})

export default HelloReact