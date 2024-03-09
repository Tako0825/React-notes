import React, { memo } from 'react'

const Article = memo(function() {
  console.log("Article render");
  return (
    <div>Article</div>
  )
})

export default Article