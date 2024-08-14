import './main.css' ;
import image1 from '../../images/1.svg'
import image2 from '../../images/2.svg'
import image3 from '../../images/3.svg'
import image4 from '../../images/4.svg'

export default function Main(){
    return (
       <main id='FEATURES'>
            <h1>FEATURES</h1>
            <div className="cards">
                <Card img={image1} title="Weght Lifting" description="Weight lifting is a strength training exercise involving the lifting of heavy weights to" />
                 <Card img={image2} title="Specific Muscle" description="Weight lifting targets specific muscles through various exercises, such as bicep curls " />
                 <Card img={image3} title="Flex Your Muscle" description="refers to the act of contracting and tightening a muscle to  " />
                 <Card img={image4} title="Cardio Exercise" description="Cardio exercise involves physical activities that increase heart rate and improve" />
            </div>
        
       </main>
    )
}

function Card({img,title,description}){
    return (
        <div className='card'> 
           <img src={img} alt='' />
             <h2>{title}</h2>
             <p>{description}</p>
        </div>
    )
}