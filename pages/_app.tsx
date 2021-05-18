import { Provider } from 'next-auth/client';
import { ApolloProvider } from '@apollo/client/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import client from '../apollo-client';



interface AppProps {
    Component: React.FunctionComponent
    pageProps: any
}
const App = (props: AppProps) => {
    const { Component, pageProps } = props
    const { session } = pageProps;

    return (
        <ApolloProvider client={client}>
            <Provider options={{ baseUrl: process.env.SITE || 'http://localhost:3000' }} session={session}>
                <Component {...pageProps} />
            </Provider>
        </ApolloProvider>

    );
};

export default App;