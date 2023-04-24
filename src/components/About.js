import { getQueriesForElement } from '@testing-library/react'
import React, { useState } from 'react'

export default function About(props) {

  let myStyle = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'#001029':'white',
  }
  // const [myStyle, setmyStyle] = useState({
  //     color: "black",
  //     backgroundColor : "white"
  // })

  // const [btn, setbtn] = useState("Enable Dark Mode")

  // const toggleButton = () => {
  //   if(btn === "Enable Dark Mode"){
  //     setmyStyle({
  //       color: "white",
  //       backgroundColor : "black"
  //     })
  //     setbtn("Disable Dark Mode");
  //   }
  //   else{
  //     setmyStyle({
  //       color: "black",
  //       backgroundColor : "white"
  //     })
  //     setbtn("Enable Dark Mode");
  //   }
  // }

  return (
    <div className='p-3 mx-5 mt-2' style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa error itaque, quos magni libero aperiam neque culpa commodi maiores facere dicta, iure ratione, ad nulla dolorem qui obcaecati voluptates.
    A voluptatibus natus quam ullam qui, facilis et accusamus. Incidunt, nemo sit asperiores aliquid maxime sapiente minus consequuntur dignissimos laudantium, repudiandae perferendis veritatis obcaecati laborum exercitationem quod. Blanditiis, reiciendis dolore?
    Culpa saepe animi, quisquam nobis nihil quia modi maxime accusantium ex mollitia, distinctio, rerum non quo. Impedit sit possimus incidunt pariatur voluptatem, expedita commodi aut doloribus minus at maxime voluptas.
    Culpa recusandae rerum ratione omnis quia earum vel ipsam porro sapiente error qui corrupti ad ab laborum libero quas minima exercitationem nostrum, dolor ex aliquam modi magnam dolore iste. Quos.
    At aliquam quae repudiandae nostrum architecto culpa eveniet deleniti perferendis iste repellendus in, expedita totam nihil quo. Nam, aspernatur similique sapiente dolorum minus, expedita eveniet architecto hic, illum omnis et?
    Repudiandae natus sit, quia quidem iure quisquam culpa incidunt accusamus cupiditate debitis consequuntur doloremque, dolor officiis quibusdam quasi optio cumque beatae omnis? Beatae iure aliquid quos quisquam fugiat totam molestias!
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div style={myStyle} id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate totam eligendi nemo aliquid eos distinctio nobis nulla. Enim consequatur non, eum ratione minima, nulla eligendi soluta, ipsum doloremque explicabo tenetur.
    Iste repellat, deserunt hic, inventore necessitatibus architecto perspiciatis nemo, nostrum sunt temporibus dolores recusandae quasi quo? Dolorem modi ipsa possimus, impedit atque error recusandae, unde ratione saepe esse dolor nisi?
    Rerum soluta alias blanditiis incidunt vel assumenda veritatis reprehenderit voluptas harum tempora, accusamus, quos porro, dolor cupiditate magni saepe! Obcaecati fugit debitis porro ab mollitia iure ad enim, praesentium eius?
           </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser compatible</strong>
      </button>
    </h2>
    <div style={myStyle} id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque id maxime culpa, vitae doloremque ea atque ad quod reiciendis harum? Quidem nisi necessitatibus est corrupti molestiae quod minima quasi autem?
    Magnam possimus aperiam debitis cumque, aliquam voluptates qui! Unde numquam in, cupiditate quae facere aperiam doloribus illo placeat perferendis accusantium quia officia, architecto aliquam rerum perspiciatis. Quam recusandae eveniet beatae?
    Qui, laudantium facilis aliquid vero nostrum est eaque ipsum natus mollitia alias! Deserunt quas quod consequatur nisi reiciendis quam hic blanditiis sequi dignissimos mollitia, quae magnam, quasi quos autem ducimus.
    Vel quibusdam nobis magni. Sit reiciendis quos debitis labore magni accusamus, repudiandae eum ex, vitae, autem nemo in maiores eius ipsum dolorum id? Cum quia impedit asperiores non repellat libero!
      </div>
    </div>
  </div>
</div>
{/* <button onClick={toggleButton} className='bg-primary text-white border rounded p-2 mt-2'>{btn}</button> */}
    </div>
  )
}
