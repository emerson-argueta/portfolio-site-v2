import React from 'react'
import { useQuery, gql } from '@apollo/client';

export type ISocial = {
    imageURL: string,
    label: string,
    linkURL: string
}

const SOCIALS = gql`
  query { 
    socials{
        imageURL
        label
        linkURL
    }
  }
`;

export const Socials = () => {
    const socialsRes = useQuery(SOCIALS);

    if (socialsRes.error) return (<div>Failed to load</div>)
    if (socialsRes.loading) return (<div>Loading...</div>)

    const { socials } = socialsRes.data
    const socialElement = (socialLink: ISocial) => {
        return (
            <>
                <a
                    className="footer-socials-social"
                    key={`footer-socials-social-link-${socialLink.label}`}
                    href={socialLink.linkURL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={socialLink.imageURL}
                        alt="Social Link Icon"
                        style={{
                            height: "50%",
                            width: "50%",
                        }}
                    />
                </a>
            </>
        )
    }


    return (

        <div className="footer-socials">
            {socials?.map((social: ISocial) => socialElement(social))}
            <style jsx>{`
                .footer-socials {
                    display: grid;
                    grid-auto-flow: column;
                    justify-content: center;
                    margin:5px;
                    grid-gap:30px;
                    height:5vh;
                    grid-template-rows: 5vh;
                }
            `}</style>
        </div>
    )
}
