const React = require('react');
const Default = (html) =>{
    return(
        <html>
            <head>
                <title>{html.title || 'Default'}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />
                {/* normalize and skeliton links */}
                <link rel='stylesheet' href='/main.css'/>
                <link rel='shortcut icon' type='img/jpg' href='https://as2.ftcdn.net/v2/jpg/04/10/47/07/1000_F_410470744_OcFbEYsYnk0u6UBVIhfLyROIbNsCDP2R.jpg'/>

            </head>
            <body>
                <div className='wrapper'>
                <header>
                <h1><a href ='/breads'>Bread CRUD</a></h1>
                </header>
                <div className='container'>
                 {html.children}
                </div>
                </div>
            </body>
        </html>
    )
}

module.exports = Default