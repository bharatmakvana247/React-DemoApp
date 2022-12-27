import React from 'react'

function Alert(props) {

    function capitalWord(word) {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{height: '60px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
                {capitalWord(props.alert.type)} : {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert