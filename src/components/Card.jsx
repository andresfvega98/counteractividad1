import React from 'react'

export const Card = ({ marca, imagen, titulo, descripcion, counter }) => {
    return (
        <div class="col">
            <div class="card h-100 shadow-lg p-3 mb-5 bg-body rounded">
                <img src={imagen} class="card-img-top" alt={marca} />
                <div class="card-body">
                    <h5 class="card-title">{titulo}</h5>
                    <p class="card-text">{descripcion}</p>
                        <a href="https://www.cuc.edu.co/" target={"_blank"} rel="noreferrer noopner" class="btn btn-primary mb-3">Details</a>
                        <h5>Counter: {counter}</h5>
                </div>
            </div>
        </div>
    )
}
