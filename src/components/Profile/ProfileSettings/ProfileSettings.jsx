import React from 'react'
import settingsIcon from '../../../img/setings.svg'
import localStyle from '../profile.module.css';

function ProfileSettings(props) {
  let colorChang = (e) => {
    props.newColor(e.target.value, e.target.name);
  }
  return ( 
    <div className={localStyle.settings}>
      <input name='color1' onInput={colorChang} type='color' value={props.decorColor.decorColor1} />
      <input name='color2' onInput={colorChang} type='color' value={props.decorColor.decorColor2} />
      <img src={settingsIcon} />
    </div>
   );
}

export default ProfileSettings;