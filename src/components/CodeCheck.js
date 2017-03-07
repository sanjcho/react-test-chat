import React from 'react'
import { Button  } from 'react-bootstrap';
import { Link } from 'react-router'

const CodeChek = () =>  {
    let input
    return (
        <div>
            <h3> Введите проверочный код</h3>
            <form>
                <input ref={node => {
                    input = node
                }} />
                <Link to='/chat'>
                    <Button type='submit'>
                        Next
                    </Button>
                </Link>
            </form>
        </div>
    )
}
export default CodeChek