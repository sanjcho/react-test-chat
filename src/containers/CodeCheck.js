import React from 'react'
import { connect } from 'react-redux'
import { Button  } from 'react-bootstrap';
import { Link } from 'react-router'
import {checkCode} from '../actions'


let CodeCheck = ({checkTheCode}) =>  {
    let input
    return (
        <div>
            <h3> Введите проверочный код</h3>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                checkTheCode(input.value)
                input.value = ''
            }}>
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

const mapDispatchToProps = (dispatch) => {
    return {
        checkTheCode: (code) => {
            dispatch(checkCode(code))
        }
    }

}

CodeCheck = connect(mapDispatchToProps)(CodeCheck)

export default CodeCheck