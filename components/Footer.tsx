import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-2l text-center p-8">
      <div className="flex flex-col">
        <span>{`Brishty © ${currentYear}`}</span>
        <span className="pt-2">
          Created by{' '}
          <a className="hover:underline" href={'https://www.arkamitra.com'}>
            Arka Mitra
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
