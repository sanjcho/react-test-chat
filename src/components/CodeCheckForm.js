import React, { PropTypes } from 'react'
import { Button  } from 'react-bootstrap';


const CodeCheckForm = ({dispatchCheck}) =>  {
    let input
    return (
        <div>
            <h3> Введите проверочный код</h3>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatchCheck(input.value)
                input.value = ''
            }}>
                <input ref={node => {
                    input = node
                }} />
                <Button type='submit'>
                    Next
                </Button>
            </form>
        </div>
    )
}

CodeCheckForm.propTypes = {
  dispatchCheck: PropTypes.func.isRequired
}

export default CodeCheckForm
