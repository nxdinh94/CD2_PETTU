import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';

import App from '~/App';
import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';

// import IntlProviderWrapper from '~/hoc/IntlProviderWrapper';
import GlobalStyles from '~/components/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {/* <IntlProviderWrapper> */}
            <GlobalStyles>
                <App />
                {/* <CustomCursor /> */}
            </GlobalStyles>
            {/* </IntlProviderWrapper> */}
        </PersistGate>
    </Provider>,
    // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
