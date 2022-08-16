const React = require('react')
const Default = require('./layouts/default')

const Index = ({breads,title}) =>{

    return(
     <Default title={title}>
        <h2>index page</h2>
        <div className='newButton'>
          <a href='breads/new'>
            <button>New</button>
          </a>
        </div>
       <ul>
        { 
        
             breads.map((bread, index)=>{
              return(
                <li key={index}>
                    <a href = {`/breads/${bread._id}`}>
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