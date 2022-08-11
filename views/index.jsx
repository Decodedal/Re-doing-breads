const React = require('react')
const Default = require('./layouts/default')

const Index = ({breads,title}) =>{

    return(
     <Default title={title}>
        <h2>index page</h2>
       <ul>
        { 
        
             breads.map((bread, index)=>{
              return(
                <li key={index}>
                    <a href = {`/breads/${index}`}>
                    {bread.name}
                    </a>
                    </li>
              );
              })
            }
            
       </ul>
     </Default>
    )
}

module.exports = Index