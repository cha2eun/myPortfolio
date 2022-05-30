import React from 'react';
import { workExp } from '../../portfolio';
import WorkCard from '../WorkCard/WorkCard';
import './WorkExp.css';

function WorkExp() {
    const List = workExp.work;
    const tit = workExp.pageTit;
    return (
        <section className="section--exp" id="work">
            <div className="inner">
                <div className="exp-title">
                    <p>{tit}</p>
                </div> 
                
                <div className="exp-cards">
{/*                     {workExp.lists.map((list, i) => {
                        return <WorkCard workExp={list} key={i} />
                    })}
 */}            {List.map((workE, workIdx) => (
                    <section className={"section--work "+ workE.clickName}>
                    <div className="exp-cards">
                        <p className ="exp-subTitle" >{workE.title}</p>
                        
                         <WorkCard works={workE.lists} />
                    </div>
                    </section>
                ))}     
                </div>

            </div>
        </section>
    );
}
export default WorkExp;