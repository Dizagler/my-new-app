import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.profileImg}>
        Тут шапка профиля
       </div>
      <div className={s.descriptionBlock}>
        ava+description
      </div>

    </div>
  )
}

export default ProfileInfo;