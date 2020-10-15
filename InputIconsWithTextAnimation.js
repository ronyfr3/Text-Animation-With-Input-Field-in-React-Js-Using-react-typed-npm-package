import React from 'react'
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import {GoSearch} from 'react-icons/go'
import './Input.css'

function InputIconsWithTextAnimation() {
    return (
        
        <> 
          <span className="GoIcon"><GoSearch/></span>
            <Typed
                strings={[
                    'Search for products',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    className='inputText'
                    attr="placeholder"//for input field attr is must
                    loop 
                    >
                    <input type="text" className='inputField'/>
        </Typed>
      </>
    )
}

export default InputIconsWithTextAnimation
