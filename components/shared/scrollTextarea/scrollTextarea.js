import React from 'react';
import { TextAreaScroll } from './styled-scrollTextarea';

const ScrollTextArea = React.forwardRef(
  function ScrollTextArea({name, label, id, placeholder, onChange, defaultValue}, ref){
    return(
      <>
        <div className='flex flex-col  w-full'>
          <p className='mb-2 font-medium text-[13px]'>{label}</p>
          <TextAreaScroll>
            <textarea
              className="textarea"
              id="textarea"
              name ={name}
              rows= "6"
              cols = "37"
              ref={ref}
              // value = {props.value}
              defaultValue={defaultValue}
              onChange={onChange}
              placeholder= {placeholder ? placeholder : "Enter message"}
            >
            </textarea>
          </TextAreaScroll>
        </div>
      </>
    )
  }
)

export default ScrollTextArea;