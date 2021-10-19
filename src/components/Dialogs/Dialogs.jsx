import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import { addMessageDialogActionCreator, updateNewMessageActionCreator} from '../../redux/state';


const Dialogs = (props) => {
   debugger;
  let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)
  let messegesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} />)
  let newDialogElement = React.createRef();
  
  let addMessageDialog = () => {
    props.dispatch(addMessageDialogActionCreator());
  }
 let onMessageChange = () => {
   let text = newDialogElement.current.value;
   let action = updateNewMessageActionCreator(text);
   props.dispatch(action);
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
            <textarea onChange={onMessageChange} ref={newDialogElement}  value={props.dialogsPage.newMessageText} className={s.messageAdd} placeholder="Напишите сообщение..." id="" cols="100" rows="5"></textarea>
        </div>
        <div>
        <button onClick={addMessageDialog}>Отправить сообщение</button>
        </div>
        </div>
      </div>
      
    </div>

  )
}

export default Dialogs;

