const React = require('react')
const Default = require('./layouts/default')

const Error =()=>{
    return(
        <Default>
            <h2>Error 404 the page does not exist</h2>
        </Default>
    )
}

module.exports = Error