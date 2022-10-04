import LeftMenu from '../../ui/Menu/LeftMenu';
import Container from '../../ui/Container';
import Card from '../../ui/Card';
import { useState } from 'react';
import { CardInterface } from '../../ui/Card/types';
import Modal from '../../ui/Modal';
import Input from '../../ui/input/input';
import Button from '../../ui/Button';

export function EventList() {
  const [nameEvent, setNameEvent] = useState<string>('')
  const [openCadastro, setOpenCadastro] = useState<boolean>(false)
  const [listEvent, setEventList] = useState<CardInterface[]>([
    {
      title: 'Rock in Rio',
      dataEvent: '10/09',
      description: 'Cidade do Rock',
      price: 600,
      img: '',
    }
  ])

  const [event, setEvent] = useState<CardInterface>({
    title: '',
    dataEvent: '',
    description: '',
    price: 0,
    img: '',
  })
  return (
    <Container>      
      <div>
        <Modal
          show={openCadastro}
          title='Adicionar novo evento'
          confirm={{
            text: 'Salvar Evento',
            onClick: () => {
              setEventList(list => [
                ...list,
                event
              ])
            }
          }}
          cancel={{
            text: 'Fechar',
            onClick: (value) => setOpenCadastro(value)
          }}
          content={
            <div className='inputModal' >
              <Input
                label='Nome do Evento'
                value={event.title}
                onChange={(input) => setEvent({...event, title: input})} 
              />

              <Input
                label='Data de Inicio'
                value={event.dataEvent}
                onChange={(input) => setEvent({...event, dataEvent: input})} 
              />

              <Input
                label='Local'
                value={event.description}
                onChange={(input) => setEvent({...event, description: input})} 
              />

              <Input
                label='Preço'
                value={event.price}
                onChange={(input) => setEvent({...event, price: input})} 
              />
            </div>
          }
        />
        <Button 
          size='large'
          text='Adicionar Evento'
          type='primary'
          onClick={() => setOpenCadastro(true)}
        />
        <div className="d-flex">
        {listEvent.map((card, index) => {
          return(
            <Card
              key={index}
              title={card.title}
              img={card.img}
              dataEvent={card.dataEvent}
              description={card.description}
              price={card.price}
            />
          )
        })}

        </div>
      </div>
    </Container>
  )
}

