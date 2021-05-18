import React from 'react'

export type EmailProps = {
    email: string,
}
export const Email = (props: EmailProps) => {
    const { email } = props
    return (
        <div className="footer-email">
            <a href={`mailto:${email}`}>{email}</a>
            <style jsx>{`
                .footer-email {
                    margin:5px;
                }       
            `}</style>
        </div>
    )
}
