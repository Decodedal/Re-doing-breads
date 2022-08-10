const React = require('react');
const Default = html =>{
    return(
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                <h1>Rendered</h1>
                <div className='container'>
                 {html.children}
                </div>
            </body>
        </html>
    )
}

module.exports = Default