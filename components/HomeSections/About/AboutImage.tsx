interface AboutImageProps {
    imageURL?: string
}
export const AboutImage = (props: AboutImageProps) => {
    const { imageURL } = props

    return (
        <div className='about-image'>
            <img src={imageURL || ""} alt="About Image" />
            <style jsx global>{`
                .about-image {
                    display: grid;
                    align-content: center;
                    justify-content: center;
                }
                .about-image img {
                    width: 20vmin;
                }
            `}</style>
        </div>
    )
}