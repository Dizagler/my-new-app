import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';


const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;
  let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)
  let messegesElements = state.messages.map((m) => <Message message={m.message} />)
  let newMessageBody = state.newMessageBody;
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }
  
  let onMessageChange = (e) => {
   let body = e.target.value;
   props.store.dispatch(updateNewMessageBodyCreator(body))
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
            <textarea onChange={onMessageChange} value={newMessageBody} className={s.messageAdd} placeholder="Напишите сообщение..." id="" cols="100" rows="5"></textarea>
        </div>
        <div>
            <button onClick={onSendMessageClick}>Отправить сообщение</button>
        </div>
        </div>
      </div>
      
    </div>

  )
}

export default Dialogs;

