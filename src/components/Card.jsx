import React from 'react';



const Card = (props)=>{
    return(
        <>
            <div className='Card' style={{flexDirection: props.direction}}>
                <div className='cardleft'>
                    <img src={props.img} alt="" />
                </div>
                <div className='cardright'>
                    <h1>{props.h1}</h1>
                    <div className='stack'>
                        <span>{props.media}</span>
                        <div className='circle'></div>
                        <p>{props.stack}</p>
                        <div className='circle'></div>
                        <p>{props.year}</p>
                    </div>
                    <p>{props.text}</p>
                    <div className='language'>
                        <div className='html'>html</div>
                        <div className='rubby'>Ruby on rails</div>
                        <div className='css'>css</div>
                        <div className='javascript'>javascript</div>
                    </div>
                    <button>See Project</button>
                </div>
            </div>
        </>
    )
}



export default Card