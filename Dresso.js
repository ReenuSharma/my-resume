import React from 'react'

const Dress =(props)=>{
    
    const{ img, title, author, cost, stock}= props.dress;
    const clickHandler = () => {
        alert('unavailable in your region');
    };
    return (<article className='dress' onMouseOver={()=>{
        console.log(title);
    }} >
        <img src={img} alt='' />
        <h1 onClick={()=> console.log(title)}>{title}</h1>
        <h4 style={{color: '#617d98', fontSize: '0.75rem'}}>{author}</h4>
        <h4>{cost}</h4>
        <h5 style={{color: 'green'}}>{stock}</h5>
        <button type= "button" onClick={clickHandler}>Buy Now!</button>
        
    </article>
    );
}
export default Dress;