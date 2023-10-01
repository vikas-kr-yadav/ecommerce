import React from 'react'
import Item from './Item'
import "./Container.css"

const Container = (props) => {

  const apple = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg";

  const banana = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg";

  const grapes = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg"

  const pineapple = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg";

  const straberry = "https://www.bigbasket.com/media/uploads/p/l/10000263_12-fresho-strawberry.jpg";

  const yogurt = "https://images.heb.com/is/image/HEBGrocery/prd-medium/001297099.jpg"


  return (
    <div id={props.name}>
        <div>
            <h2>{props.name}</h2>
        </div>
        <div className='container_wrapper'>
            <Item category={apple}/>
            <Item category={grapes}/>
            <Item category={pineapple}/>
            <Item category={banana}/>
            <Item category={straberry}/>
            <Item category={yogurt}/>
        </div>
    </div>
    
  )
}

export default Container;