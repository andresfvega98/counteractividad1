import React, { useState } from 'react'
import { Card } from './components/Card';
import { data } from './helpers/data'

export const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="container ps-5 pe-5 border border-secondary rounded mt-3 mb-3 p-3">
        <div className="row mb-3 d-flex justify-content-center">
          <h3 className='w-25'>Contador: { counter }</h3>
        </div>
        <div className="row d-flex justify-content-around">
          <div className="col-sm-2">
            <button className="btn btn-danger" onClick={ () => setCounter( counter - 1 ) }>Decrement</button>
          </div>

          <div className="col-sm-2">
            <button className="btn btn-warning" onClick={ () => setCounter( 0 ) }>Reset</button>
          </div>

          <div className="col-sm-2">
            <button className="btn btn-success" onClick={ () => setCounter( counter + 1 ) }>Increment</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {
            data.map((e, id) => {
              return (
                <Card marca={e.marca} imagen={e.imagen} titulo={e.titulo} descripcion={e.descripcion} counter={counter} />
              );
            })
          }
        </div>
      </div>
    </>
  )
}

