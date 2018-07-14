import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import { client } from './apollo';
import './index.css';
ReactDOM.render(React.createElement(ApolloProvider, { client: client },
    React.createElement(Routes, null)), document.getElementById('root'));
registerServiceWorker();
//# sourceMappingURL=index.js.map