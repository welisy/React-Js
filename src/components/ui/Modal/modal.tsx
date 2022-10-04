import React from "react"
import Button from '../../ui/Button';

interface ModalProps {
  title: string;
  content: React.ReactElement;
  show: boolean;
  confirm?: {
    text: string,
    onClick: () => void
  };
  cancel: {
    text: string,
    onClick: (value: boolean) => void
  }
}

export default function Modal({
  title, 
  content,
  show = false,
  confirm,
  cancel,

}: ModalProps) {
  return(
      <div 
      style={{display: show === false ? 'none' : 'flex' }}
      className="modal-inner">
        <div 
          className={show === true ? 'content openModal' : ' content closeModal'}
        >
          <h4>{title}</h4>
          <hr />
          {content}
          <div className="modal-footer">
            <Button 
              size='small'
              type='primary'
              text={cancel.text}
              onClick={() => cancel.onClick(false)}
              
            />
            {confirm && 
              <Button 
                size='small'
                text={confirm.text}
                type='default'
                onClick={() => confirm.onClick()}
              />
            }
          </div>
        </div>
      </div>
  )
}