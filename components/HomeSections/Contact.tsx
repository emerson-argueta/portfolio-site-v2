

export const Contact = () => {


    const titleElement = (
        <div className="contact-title">
            <h1>{"You can contact me"}</h1>
        </div>
    )
    const contactElement = (
        <div className='contact-button'>
            <button>
                <a href={`mailto:emerson@emersonargueta.com`}>
                    {"Here"}
                </a>
            </button>
        </div>
    )

    return (
        <div className='contact'>
            {titleElement}
            {contactElement}
            <style jsx global>{`
                .contact {
                    display: grid;
                }
                .contact-title {
                    display: flex;
                    justify-content: center;
                }
                .contact-button {
                    display: flex;
                    justify-content: center;
                }
            `}</style>
        </div>
    )
}
