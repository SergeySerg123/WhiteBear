import React from 'react';
import Header from '../Header/Header';


export const withHeader = (WrappedComponent, isWhite) => {
    class HOC extends React.Component {
        render() {
            return (
                <main>
                    <Header isWhite={ isWhite } />
                    <section>
                        <WrappedComponent />
                    </section>                  
                </main>
            )
        }
    }

    return HOC;
}