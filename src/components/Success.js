import { useEffect } from "react"


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '317px',
        alignItems: 'center',
    },
    innerDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        width: '100%',
    },
    cardWrapper: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '100px',
        border: '1px solid #ECEFF3',
        alignItems: 'center',
        padding: '4px 6px 4px 6px',
        justifyContent: 'center',
        backgroundColor: '#F6F8FA'
    }
}

export const Success = ({selectedCard}) => {

    useEffect(() => {
        console.log(selectedCard)
    })

    return (
        <div style={styles.container}>
        <div style={styles.innerDiv}>
            <div>Success!</div>
            <div style = {styles.cardWrapper}>
                <img src={selectedCard.img} alt={selectedCard.name} style={{width: '20px', height: '20px', borderRadius: '62.5px'}}/>
                <div>{selectedCard.name}</div>
                
                
                </div>
            <div>Added to Spyder</div>
        </div>
        </div>
    )
}