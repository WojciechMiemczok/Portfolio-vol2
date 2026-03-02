import React from 'react';
//import icons

import {
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaGithub
} from 'react-icons/fa'

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li><a href='https://www.instagram.com/miemczok_media/' target='_blank'><FaInstagram /></a></li>
      <li><a href='https://www.facebook.com/wojtek.miemczok/' target='_blank'><FaFacebook /></a></li>
      <li><a href='https://share.google/fupuHXDWMTFABIcQB' target='_blank'><FaGoogle /></a></li>
      <li><a href='https://github.com/WojciechMiemczok' target='_blank'><FaGithub /></a></li>
    </ul>
  </div>;
};

export default Socials;
