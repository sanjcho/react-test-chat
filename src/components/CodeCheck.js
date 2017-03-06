import React from 'react'
import { Button  } from 'react-bootstrap';
import { Link } from 'react-router'

const CodeChek = () =>  {
    let input
    return (
        <div>
            <h3> Введите проверочный код</h3>
            <input ref={node => {
                input = node
            }} />
            <Link to='/chat'>
                <Button>
                    Apply
                </Button>
            </Link>
        </div>
    )
}
export default CodeChek