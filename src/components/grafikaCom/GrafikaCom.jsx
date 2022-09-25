import React from 'react'
import './grafikaCom.css'

const GrafikaCom = () => {
    const images = [
        "https://www.usnews.com/object/image/0000017e-f8c3-da45-a97f-fcd3abb60000/1-intro-stock.jpg?update-time=1644851079414&size=responsive640",
        "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAzNTIxODYwOTM3/istock_000014963145large-2.jpg",
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/38/cf/3d.jpg"
      ];
      return (
        <div className="grafComp">
          <div className="grafList">
            {
              images.map((item, index) => {
                return (
                    <div>
                        <div className="grafikaItem">
                                <img src={images[index]} className="grafikaImgItem"/>
                        </div>
                        <div className="grafikaDesc">
                            <p>Pretty random photos of aurora</p>
                        </div>
                    </div>
                )
              })
            }
          </div>
        </div>
      )
}

export default GrafikaCom