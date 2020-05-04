import React from 'react';
import './Main.css';
import Slider from './Slider/Slider';

class Main extends React.Component {
    render () {
        return (
            <main className="background-color-1st">
                <Slider />
            </main>                    
        )
    }
}

export default Main;