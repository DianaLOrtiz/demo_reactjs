import React from 'react'

export default function tarjeta(props) {
  return (
    <div>
      <div className='card'>
        <div className='card-body'>
          {props.texto}
        <div className='row'>
          <div className='col-md-2'>
            <h6>Votos:{props.votes}</h6>
            <span className='badge badge-danger'>Respuestas: {props.answers} </span>
            <h6>Vistas: {props.views}</h6>
          </div>
          <div className='col-md-10'>
                <div className='row'>
                <div className='col-md-6'>
                  <div className="row"><h3>{props.title}</h3></div>
                  <div className="row">
                    {
                      props.etiquet?.map((elemento)=>(
                        <span key={elemento} className='badge badge-success'>{ elemento}</span>
                      ))
                    }

                  </div>
                </div>
                 <div className='col-md-6'>
                  <div className="row"></div>

                  <div className="row"><p className='mt-5'>{props.user}</p></div>
                </div>
                </div>
               
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}
