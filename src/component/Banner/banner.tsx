import './banner.css'
import Typing from '../Typing/typing'

function Banner(props:any){
    return (
        <div className="banner">
            <div className="banner-content">
                <h2 className="banner-title">
                    {props.title !== "" ? props.title : <Typing/> }
                </h2>
                <p className="banner-description">{props.text}</p>
            </div>
        </div>
  )
}

export default Banner