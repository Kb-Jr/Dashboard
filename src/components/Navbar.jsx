import React from 'react'
import { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import avatar from '../data/avatar.jpg';

import { Cart, Chat, Notifications, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc} style={{ color }} className='relative rounded-full text-xl hover:bg-light-gray p-3 '>
      <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {

  const { activeMenu, setactiveMenu, isClicked, setisClicked, handleClick, screenSize, setscreenSize, currentColor } = useStateContext();

  useEffect(() => {
    const handleResize = () => setscreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  }, []);


  useEffect(() => {
    if (screenSize <= 900) {
      setactiveMenu(false);
    }
    else {
      setactiveMenu(true);
    }

  }, [screenSize]);

  return (
    <div className='flex justify-between p-2 md:mx-6 relative' >
      <NavButton title="Menu" customFunc={() => setactiveMenu((prevactiveMenu) => !prevactiveMenu)} color={currentColor} icon={<AiOutlineMenu />} />

      <div className='flex'>
        <NavButton title="Cart" color={currentColor} customFunc={() => handleClick('cart')} icon={<FiShoppingCart />} />
        <NavButton title="Chat" dotColor='#03C9D7' customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor='#03C9D7' color={currentColor} customFunc={() => handleClick('notification')} icon={<RiNotification3Line />} />
        <TooltipComponent content="Profile" position='BottomCenter' onClick={() => handleClick('userProfile')}>
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'>
            <img src={avatar} className='rounded-full w-8 h-8' />
            <p>
              <span className='text-gray-400 text-14'>Hi</span> {''}
              <span className='text-gray-400 ml-1 font-bold text-14'>Kabir!</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />

          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notifications />}
        {isClicked.userProfile && <UserProfile />}
      </div>

    </div>
  )
}

export default Navbar