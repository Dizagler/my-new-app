import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogs = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Ira' },
    { id: 4, name: 'Sveta' },
    { id: 5, name: 'Uliya' },
    { id: 6, name: 'Ivan' },
  ]
  let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Im fine, and you?' },
    { id: 4, message: 'Fine, what will you do tomorrow?' },
    { id: 5, message: 'IDK' },
    { id: 6, message: 'Go to the cinema.' },
  ]
  let dialogsElements = dialogs
    .map((d) => <DialogItem name={d.name} id={d.id} />)
  let messegesElements = messages.map((m) =>
    <Message message={m.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messegesElements}
      </div>
    </div>

  )
}

export default Dialogs;

