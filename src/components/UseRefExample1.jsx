import {useRef} from 'react'

const UseRefExample1 = () => {
  const inputRef = useRef()
  const paraRef = useRef()
  const onSubmit = (e) => {
    e.preventDefault()

    // inputRef.current.value holds the the value in the input of type text
    // optionally, we can use this instead of useState, but very specific scenarios 
    console.log(inputRef.current.value)
    inputRef.current.value = 'Hello'
    inputRef.current.style.backgroundColor = 'red'
    // *** Important to know that this wouldn't cause the components to re-render
    paraRef.current.innerText = 'Goodbye'
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='name'>Name</label>
      <input type='text' ref={inputRef} id='name' className='form-control mb-2' />
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
      <p ref={paraRef} onClick={() => inputRef.current.focus()}></p>
    </form>
  )
}

export default UseRefExample1
