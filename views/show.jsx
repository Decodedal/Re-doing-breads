const React = require('react');
const Default = require('./layouts/default');

const Show = ({bread, index})=>{
    console.log(bread)
    return(
        <Default>
            <h2>Show page</h2>
            <h3>{bread.name}</h3>
            <p>
                and it 
                {
                    bread.hasGluten
                    ?<span> does </span>
                    :<span> does NOT </span>
                }
                have Gluten.
            </p>
            <img src={bread.image} alt = {bread.name}/>
            <a href={`/breads/${index}/edit`}><button>edit</button></a>
            <form action={`/breads/${bread._id}?_method=DELETE`} method="POST">
            <input type = 'submit'value = 'delete'/>
            </form>
        </Default>
    );
};

module.exports = Show