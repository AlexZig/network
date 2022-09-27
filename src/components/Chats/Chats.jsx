import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import localStyle from './chats.module.css'
import ChatsItem from './ChatsItem/ChatsItem';
import ChatsManagment from './ChatsManagment/ChatManagment';
import Massage from './Massage/Massage';




function Chats(props) {
    return (
        <div className="chats">
            <div className={localStyle.container}>
                <div className={localStyle.list}>
                    {props.massagesData.chats.map(item => <ChatsItem name={item.name} id={item.id} />)}

                </div>
                <div className={localStyle.massages}>
                    <ChatsManagment dispatch={props.dispatch} />
                    {props.massagesData.massages.map(item => <Massage massage={item.massageText} id={item.id} />)}
                </div>
            </div>
        </div>
    );
}

export default Chats;