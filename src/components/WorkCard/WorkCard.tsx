import React from 'react';
import './WorkCard.css';

function WorkCard({ works }: Props) {
    const Fade = require('react-reveal/Fade');
    
    return (
        <Fade duration={800} bottom>
        <div className="expcard-main">
            <div className="inner">
                <div className="expcard-role">
                    {works.subTit}
                </div>
                <div className='expcard-content'>
                    {works.text}
                </div>
                
            </div>
        </div>
        </Fade>
    );
}
interface Props {
    works : {
        // { lists: { subTit: string,text: string }[]; }
        // lists: {subTit:string, text: string}[],
        text: string,
        subTit: string,
        // date: string | number,
        // content: string
    }
}
export default WorkCard;