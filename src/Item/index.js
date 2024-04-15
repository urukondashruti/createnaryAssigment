import "./index.css";
const Item = (props) => {
    const {item} = props
    const {id,head,para,img1} = item
    const imgurl=`${img1}.png`
     return (
        <div>
            <h1 className="chronohead">{head}</h1>
            <p className="chronopara">{para}</p>
            <img src={imgurl} alt="img1"/>
        </div>
     )
}

export default Item;