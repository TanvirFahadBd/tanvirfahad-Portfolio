import React from 'react'

const Link = () => {
  let items = ["Homepage", "services","porthfolio", "contact", "About"]
  return (
    <div className='link'>
      {items.map((item,keyea)=>(
      <a href={`#${item}`} key={keyea}>
        {item}
      </a>
      ))}
    </div>
  );
};

export default Link