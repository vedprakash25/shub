import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import "./magicStyles.css"


const MagicScroll = () => {
    return (
        <div className='MagicScroll'>

            <h1>MagicScroll</h1>

            <Controller>
                <Scene duration={1000} pin>
                    <div className='sticky__example green'>Sticky Example</div>
                </Scene>
                <Scene duration={1000} pin>
                    <div className='sticky__example pink'>Sticky Example</div>
                </Scene>
                <Scene duration={1000} pin>
                    <div className='sticky__example orange'>Sticky Example</div>
                </Scene>
            </Controller>

            <Controller>
                <Scene offset={1000} >
                    <div className='sticky__example green'>Sticky Example</div>
                </Scene>
                <Scene offset={80} >
                    <div className='sticky__example pink'>Sticky Example</div>
                </Scene>
            </Controller>

        </div>
    );
}


export default MagicScroll;

