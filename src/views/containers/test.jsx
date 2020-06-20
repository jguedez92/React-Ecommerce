import React, { useEffect } from 'react'
import { connect } from 'react-redux'
const test = () => {
    useEffect(() => {
        console.log('entrando')
    }, [])
    return (
        <div>
        </div>
    )
}

export default test
const mapStateToProps = state => ({});
export default connect(mapStateToProps)();