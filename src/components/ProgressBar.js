import { AppContext } from "../Context"
import { useContext } from 'react';

const styles = {
    container: {
        width: '528px',
        height: '39px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
    
        gap: '5px',
    },
    rectangle: {
        borderRadius: '100px',
        height: '7px',
        width: '33%',

    }

    
}

export const ProgressBar = () => {

    const {progress} = useContext(AppContext);


    return(
        <div style={styles.container}>
            <div style={{...styles.rectangle, backgroundColor: '#84BDF6'}}></div>
            <div style={{...styles.rectangle, backgroundColor: progress > 1 ? '#84BDF6' : '#ECEFF3'}}></div>
            <div style={{...styles.rectangle, backgroundColor: progress > 2 ? '#84BDF6' : '#ECEFF3'}}></div>
        </div>
    )
}