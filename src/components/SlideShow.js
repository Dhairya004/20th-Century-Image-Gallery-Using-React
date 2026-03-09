import Slide from './Slide';
import SlideContent from '../imagesnew.json';
import Carousel from "react-material-ui-carousel";
import photoFrame from '../images/home_images/photoframe.svg';

export default function SlideShow(props) {
  return (
    <>
      <img src={photoFrame} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px' }} alt="" />

      <Carousel 
      navButtonsWrapperProps={{   
        style: {
            bottom: '10px',
            top: 'unset'
        }
      }} 
      sx={{ position: 'absolute', top: '47%', left: '50.5%', transform: 'translate(-50%, -50%)', width: '520px', height: '330px' }} navButtonsAlwaysVisible={true} indicators={false}>
        {
          SlideContent[props.index].map( (image, i) => {if (i !== 0) return <Item key={i} image={image} />; } )
        }
      </Carousel>
    </>
  )
}

function Item(props) {
  return (
    <div style={{ position: 'absolute', top: '47%', left: '50.5%', transform: 'translate(-50%, -50%)', width: '520px', height: '330px' }}>
      <img src={props.image.imgUrl} alt={props.image.title} style={{ width: '100%', height: '100%' }} />
      <p style={{position: 'absolute', bottom: '0', left: '0', right: '0', margin: 0, padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>{props.image.description}</p>
    </div>
  )
}