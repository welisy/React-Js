import React from "react"
import { CardInterface } from "./types"

export default function Card(card: CardInterface) {
  return( 
    <div>
      <div className="card-profile">
          <div className="card-profile_visual"></div>

          <div className="card-profile_user-infos">
            <span className="infos_name">{card.title}</span>

            <a href="#"></a>
          </div>

          <div className="card-profile_user-stats">
            <div className="stats-holder">
              <div className="user-stats">
                <strong>Data de Inicio</strong>
                <span>{card.dataEvent}</span>
              </div>
              <div className="user-stats">
                <strong>Local</strong>
                <span>{card.description}</span>
              </div>
              <div className="user-stats">
                <strong>Preço</strong>
                <span>R$ {card.price},00</span>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}