const React = require('react');
const Default = require('./layouts/default');

function Show({baker}){
    return(
    <Default>
        <main>
            <h3>{baker.name}</h3>
            <p><b>{baker.name}</b> has been bakeing with us since{baker.startDate.getFullYear()}</p>
            <p>About <b>{baker.name}</b>: {baker.bio}</p>
            <h3>Breads {baker.name} has baked</h3>
            <ul>
                {
                baker.breads.map((bread)=>{
                    return(
                        <li key={bread._id}>
                            {bread.name}
                        </li>
                    )
                })
                }
            </ul>
            <form action={`/bakers/${baker.id}?_method=DELETE`}method='POST'>
                <input type= 'submit' value='DELETE'/>
            </form>

        </main>
    </Default>
    )
}

module.exports = Show