const DisplayCard = ({ heading, name, address, src }) => {
    return <div style={{ display: 'flex', gap: '10px' }}>
        <img height={'20px'} width={'20px'} src={src} alt="not found"/>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
                {heading}
            </div>
            <div style={{ fontWeight: 'bold' }}>
                {name}
            </div>
            <div style={{ color: '#868686' }}>
                {address}
            </div>
        </div>
    </div>
}

export default DisplayCard