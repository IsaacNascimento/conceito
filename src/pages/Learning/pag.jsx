import React from 'react'

import { Button } from 'react-bootstrap'

import Cartao from '../../components/Cartao'

const Pagina = () => {
  return (
    <div>
      <Cartao image="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg" text="É o trikas não tem jeito">
        <p>É o trikasssss</p>
        <Button variant="danger">Button</Button>
      </Cartao>  
    </div>
  )
}

export default Pagina
