import React from 'react';
import { workExp } from '../../portfolio';
import WorkCard from '../WorkCard/WorkCard';
import './WorkExp.css';

function WorkExp() {
    const List = workExp.work;
    const tit = workExp.pageTit;
    return (
        <section className="section--exp" id="experience">
            <div className="inner">

                <div className="exp-title">
                    <p>{tit}</p>
                </div> 
                
                <div className="exp-cards">
{/*                     {workExp.lists.map((list, i) => {
                        return <WorkCard workExp={list} key={i} />
                    })}
 */}            {List.map((workE, workIdx) => (
                    <div className="exp-cards">
                        <p className ="exp-subTitle" key={workIdx}>{workE.title}</p>
                        
                        return <WorkCard works={workE.lists} key={workIdx}/>
                    </div>
                ))}     
                </div>

            </div>
        </section>
    );
}
export default WorkExp;