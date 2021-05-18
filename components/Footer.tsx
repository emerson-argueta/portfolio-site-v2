import React from 'react'
import { Email } from './Email';
import { Socials } from './Socials';

const Footer = () => {
    return (
        <footer >
            <Socials />
            <Email email={"emerson@emersonargueta.com"} />
            <style jsx global>{`
                footer {
                    display:flex;
                    flex-direction:column;
                    text-align: center;
                    max-height:20vh;
                }       
            `}</style>
        </footer>
    );
}

export default Footer