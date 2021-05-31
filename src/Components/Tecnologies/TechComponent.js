import './TechComponent.css'
const Tech = () => {
    return (
        <div className="Tech">  
          <h4>Technologies</h4> 
          <ul>
              <li><img src="https://www.jing.fm/clipimg/full/53-537670_python-png-file-python-logo-png.png" alt="Python"/><span className="python"> Python</span></li>
              <li><img src="https://1000logos.net/wp-content/uploads/2020/08/Django-Logo.png" alt=" Django"/> Django </li>
              <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript"/> JavaScript</li>
              <li><img src="https://iconape.com/wp-content/png_logo_vector/node-js-2.png" alt="NodeJS"/>NodeJS </li>
              <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt=">ReactJS"/>ReactJS</li>
              <li><img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_flutter_icon_130599.png" alt="Flutter"/>Flutter</li>
              </ul> 
        </div>
    )
}


export default Tech;