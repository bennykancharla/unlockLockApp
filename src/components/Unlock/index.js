// Write your code here
import {useState} from 'react'

import {MainContainer, Para, UnlockBtn} from './styledComponents'

const Unlock = () => {
  const [lockStatus, setStatus] = useState(false)

  const onClickBtn = () => {
    setStatus(prev => !prev)
  }

  return (
    <MainContainer>
      <img
        src={
          lockStatus
            ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
        }
        alt={lockStatus ? 'unlock' : 'lock'}
      />
      <Para>Your Device is {lockStatus ? 'Unlocked' : 'Locked'}</Para>
      <UnlockBtn type="button" onClick={onClickBtn}>
        {lockStatus ? 'Lock' : 'Unlock'}
      </UnlockBtn>
    </MainContainer>
  )
}

export default Unlock
