import React from 'react';
import ReactDOM from 'react-dom';
import Root from  './root';

// Adds the .hot property to this js module
import { AppContainer } from 'react-hot-loader';

// Function that can be used to rended any component and still use the hot loader
function render(Component){
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('react-root')
    )
}

// Actually render stuff here
render(Root);
// render(List, 'list-component');

// Checks if the module is hot, in case it is it reloads the page
// without losing all the data saved in the state. The module becomes hot
// whenever an assets gets edited and recompilation is necessary for hot reloading.
if(module.hot){
    module.hot.accept('./root.js', () => {
        const NewRoot = require('./root.js').default;
        render(NewRoot);
    })
}