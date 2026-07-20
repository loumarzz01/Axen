
import { useEffect, useState } from 'react';
import './Home.css'

import { CircleCheck, LoaderCircle} from "lucide-react";





export default function Home({scrollToSection, refs}) {

    const [rotate, setRotate] = useState(0)

    const loadingAnimation = () => {
        setInterval(() => {
            setRotate((prev) => prev + 1)
        }, 15)

        return () => clearInterval(loadingAnimation)
    }

    

    useEffect(() => {
        loadingAnimation()
    }, [])

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
                            <div className='progress-fill'></div>
                        </div>

                        <p className='progress-bar-text'>90%</p>
                    </div>

                    <div className='task-container'>
                        <CircleCheck size={18} strokeWidth={3}/>
                        <p className='process-task'>Getting requirements</p>
                    </div>
                    
                    <div className='task-container'>
                        <CircleCheck size={18} strokeWidth={3}/>
                        <p className='process-task'>Designing & prototyping</p>
                    </div>

                    <div className='task-container'>
                        <CircleCheck size={18} strokeWidth={3}/>
                        <p className='process-task'>Developing core features</p>
                    </div>
                    
                    <div className='task-container'>
                        <LoaderCircle className='loading-icon' style={{ transform: `rotate(${rotate}deg)` }} size={18} strokeWidth={3}/>
                        <p className='process-task final-task'>Deploying final application</p>
                    </div>
                    

                
                    
                </div>

            </div>

            
            
        </div>
    </div>
    )
}