
import { useEffect, useState } from 'react';
import './Home.css'

import { CircleCheck, LoaderCircle, Circle} from "lucide-react";





export default function Home({scrollToSection, refs}) {

    const tasks = [
        "Getting requirements",
        "Designing & prototyping",
        "Developing core features",
        "Deploying application"
    ]

    const [currentTask, setCurrentTask] = useState(0)

    
    
    useEffect(() => {
    



        const interval = setInterval(() => {
    
            setCurrentTask(prev => {
                if (prev >= tasks.length - 1) { //if the previous value is greater than the length of tasks array
                    return 0
                }

                return prev + 1 //otherwise return prev + 1
            })

        }, 1000)

        return () => clearInterval(interval)
        
    }, [])

    const progress = ((currentTask+1) / tasks.length) * 100

    

    

    return (
        <div className='home-page'>
        <div className="home-container">


            {/*Home text*/}

          

            <div className='center-components'>


                

                <div className='home-text'>
                    
                    <h1 className="home-quote">Your digital vision, <br/> brought to life</h1>

                    <p className="home-subtitle">We design and develop custom websites, mobile applications,<br/> and software solutions that help businesses grow.</p>
                </div>

                <div className='home-btn-container'>

                    
                    <button className='get-started-btn' > 
                        <p>Get started</p>

                    </button>
                    
                    
                    

                    <button className='view-work-btn' onClick={() => scrollToSection(refs.workRef)}> View work
                        
                    </button>
                </div>

                {/*Progress Box*/}

                <div className='process-box'>
                    <p className='process-box-title'>Developing your idea</p>

                    <div className='progress-bar-container'>
                        <div className='progress-bar'>
                            <div style={{width: `${progress}%`}} className='progress-fill'></div>
                        </div>

                        <p className='progress-bar-text'>{Math.round(progress)}%</p>
                    </div>

                    {tasks.map((task, index) => (
                        <div className='task-container' key={task}>

                            {index < currentTask && (
                                <CircleCheck size={20} strokeWidth={2.5}/>
                            )}

                            {index === currentTask && (
                                <LoaderCircle className='loading-icon' size={20} strokeWidth={2.5}/>
                            )}

                            {index > currentTask && (
                                <Circle size={20} strokeWidth={2.5}/>
                             )}
                                

                            <p className='process-task'>{task}</p>
                        </div>
                    ))}
                    

                
                    
                </div>

            </div>

            
            
        </div>
    </div>
    )
}