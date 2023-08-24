import React from 'react'

const Input = ({type, placeholder}, ref) => {
  return (
    <>
       <p>
          <input ref={ref} type={type} placeholder={placeholder}/>
       </p>
       </>
  )
}

const forwardInput = React.forwardRef(Input);

export default forwardInput;