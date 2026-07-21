import './Work.css'

import { ArrowUpRight} from 'lucide-react'

import Liminal from '../../assets/liminal fundraising hd.PNG'
import Fambam from '../../assets/chatting website hd.PNG'
import PaymentSystem from '../../assets/payment system HD.PNG'

export default function Work() {

    const portfolio = [
        {
            name: "Liminal",
            desc: "Designed and developed a modern, responsive website for a client’s consultancy platform, Liminal.",
            link: "https://liminal-fundraising.vercel.app/",
            img: Liminal,
            
        },
        {
            name: "Fambam",
            desc: "Built a real-time chat app demo with secure authentication.",
            link: "https://fambamfr.vercel.app/",
            img: Fambam,
        },
        {
            name: "Payment system demo",
            desc: "Built a Stripe-powered e-commerce demo with a shopping cart and checkout flow.",
            link: "https://github.com/loumarzz01/Payment_System",
            img: PaymentSystem,
        },


    ]


    return (
        <div className='work-container'>

            <div className='projects-tag'>
                <p className='projects-tag-title'>Projects</p>
            </div>

            <p className='recent-work-title'>Recent work</p>

            <p className='recent-work-subtitle'> A showcase of our recent builds, experiments, and client work, featuring modern web applications and digital experiences.</p>

            <div className='portfolio-boxes'>
                {portfolio.map((item, index) => (
                    <div className='item-box' key={index}>
                        <p className='item-name'>{item.name}</p>
                        <p className='item-desc'>{item.desc}</p>

                        <div className='item-link-container'>
                            <a href={item.link} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className='item-link'>Check it out
                            </a>
                            <ArrowUpRight className='link-arrow' size={20}/>
                        </div>
                        <img className='item-img' src={item.img}/>
                        
                    </div>
                ))}
            </div>


        </div>
    )
}