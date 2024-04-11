import header from '../Header.png';

const styles ={
    container: {
        width: '478px',
        height: '109px',
        
    },
}

export const Spacing = () => {
    return(
        <div style = {styles.container}>
            <img src={header} alt='header' />
        </div>
    )
}