import { useContext } from "react";
import { AppContext } from "../Context";


const styles = {
    container: {
        width: '100%',
        height: '92px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: '14px',
        borderTop: '1px solid #ECEFF3',
        gap: '8px',
    },
    button: {
        width: '72px',
        height: '32px',
        borderRadius: '6px',
        padding: '6px 20px 6px 20px',
        gap: '6px',
        boxSizing: 'border-box',
        fontSize: '14px',
        fontWeight: 500,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        gap: '4px',
    }
}


export const Bottom = () => {

    const handleOnClick = () => {
        if (progress === 2) {
        setProgress(3);
        } else {
        setProgress(1);
        
        }
    }
    
    const { progress, setProgress } = useContext(AppContext);

    const content = {
        text: 'Selected',
        num: progress >= 2 ? `(1/1)`: `(0/1)`
    }

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <div>{content.text}</div>
                <div>{content.num}</div></div>
            <div 
                onClick={handleOnClick} style = {{...styles.button, 
                backgroundColor: progress >= 2 ?  '#1F69FF' : '#F6F8FA', 
                color: progress >= 2 ?  'white': '#A4ACB9'}} 
                disabled = {progress !== 2}> 
                {progress ===3 ? 'Finish': 'Next'}
            </div>
        </div>
    )

}