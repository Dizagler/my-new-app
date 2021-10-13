import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

  
  let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)
  let messegesElements = props.state.messages.map((m) => <Message message={m.message} />)
  let newDialogElement = React.createRef();
  let addMessage = () => {
    let text = newDialogElement.current.value;
    alert(text);
  }


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messegesElements}
        <div className={s.messageEnter}>
          <div>
        <textarea ref={newDialogElement} className={s.messageAdd} placeholder="Напишите сообщение..." id="" cols="100" rows="5"></textarea>
        </div>
        <div>
        <button onClick={addMessage}>Отправить сообщение</button>
        </div>
        </div>
      </div>
      
    </div>

  )
}

export default Dialogs;

