
// import {Link, useNa} from "react-bootstrap"

import {Link, useNavigate} from "react-router-dom";


const GoBack = () => {

  const navigate = useNavigate();

  return (

    <Link className="btn btn-light my-3" onClick={ () => {
      navigate(-1);
    }}>
      <i className="fa-solid fa-arrow-left"></i>
    </Link>

  )
}

export {GoBack}