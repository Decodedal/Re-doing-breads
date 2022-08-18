const React = require('react');
const Default = require('./layouts/default');

function New(){
    return(
        <Default>
            <h2>add new breads</h2>
            <form action="/breads" method='POST'>
                <label htmlFor='name'>Name</label>
                <input 
                type = 'text'
                name = 'name'
                id = 'name'
                required/>
                <label htmlFor='hasGluten'>Has Gluten?</label>
                <input 
                type= "checkbox"
                name = 'hasGluten'
                id = 'hasGluten'/>
                 <label htmlFor='image'>Image</label>
                <input
                type = "text"
                name='image' 
                id = 'image'/>
                <label htmlFor="baker">Baker</label>
                 <select name="baker" id="baker">
                   <option value="Rachel">Rachel</option>
                   <option value="Monica">Monica</option>
                   <option value="Joey">Joey</option>
                   <option value="Chandler">Chandler</option>
                   <option value="Ross">Ross</option>
                   <option value="Phoebe">Phoebe</option>
                 </select>
                <br/>
                <input type='submit'/>
            </form>
            <div className='backButton'>
                <a href='/breads'>
                    <button>Back</button>
                </a>
            </div>
        </Default>
    );
};

module.exports = New