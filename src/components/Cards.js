import green from '../EllipseGreen.png'
import black from '../EllipseBlack.png'
import activeOuter from '../activeOuter.png'
import inactiveOuter from '../inactiveOuter.png'
import petlab from '../petlab.png'
import shaveclub from '../shaveclub.png'
import { useContext } from 'react'
import { AppContext } from '../Context'
import { useEffect } from 'react'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: '25px',
        width: '100%',
        justifyContent: 'center',

    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '186px',
        width: '226px',
        
        borderRadius: '6px',
        alignItems: 'center',
        paddingTop: '20px',



    },
    adsContainer: {
        display: 'flex',
        borderTop: '1px solid #ECEFF3',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        gap: '10px',

    },
    ads: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '100%',
        marginRight: '10px',
    },
    innerAds: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '10px',
        marginLeft: '10px',
        fontSize: '12px',
        fontWeight: 400,

    },
    imgBox: {
        display: 'flex',
        alignItems:'center',
        gap: '5px'
    },
    outerImg: {
        width: '12px',
        height: '12px',
    },
    innerImg: {
        width: '7px', 
        height: '7px', 
        position: 'absolute', 
        top: '2px', 
        left: '2px'
    },
}


const cards = [
   {
    img: petlab,
    name: 'PetLab Co.',
    activeAds: '1482',
    inactiveAds: '245',
    },
    {
    img: shaveclub,
    name: 'Dollar Shave Club',
    activeAds: '420',
    inactiveAds: '69',
    },
]

export const Cards = () => {

    const {selected, setSelected, setProgress, setSelectedCard} = useContext(AppContext);

    useEffect(() => {
        setSelected(false);
        setProgress(1);
    },[])

    const handleOnClick = (index) => {
        setSelected(index);
        setSelectedCard(cards[index]);
        setProgress(2);
    }

    
    return (
        <div style= {styles.container}>
            {cards.map((card, index) => {
                return (
                    <>
                    <div style={{...styles.card, backgroundColor: selected === index ? '#F0F7FF' : 'white', border: selected === index ? '1px solid #84BDF6': '1px solid #ECEFF3'}} key = {index} onClick={() => handleOnClick(index)}> 
                    <img style={{marginBottom: '20px'}}src={card.img} alt='logo'/>
                    <div style = {{marginBottom: '20px'}}>{card.name}</div>
                    <div style={{...styles.adsContainer, backgroundColor: selected === index ? '#C7E3FF': '#F6F8FA', borderRadius: selected ? '0 0 5px 5px' : '0', borderTop: selected === index? '1px solid #84BDF6' : '1px solid #ECEFF3'}}>
                        <div style={styles.ads}>
                            <div style ={styles.innerAds}>
                                <div style={styles.imgBox}>
                                <div style={{position: 'relative'}}>
                                <img src={activeOuter} style = {styles.outerImg} alt = 'activeOuter'></img>
                                <img src={green} style={styles.innerImg} alt= 'green'></img>
                                </div>
                                <div>Active Ads</div>
                            </div>
                            <div>{card.activeAds}</div>  
                        </div>
                    </div>
                    <div style={styles.ads}>
                            <div style ={styles.innerAds}>
                                <div style={styles.imgBox}>
                                <div style={{position: 'relative'}}>
                                <img src={inactiveOuter} style = {styles.outerImg} alt = 'inactiveOuter'></img>
                                <img src={black} style={styles.innerImg} alt = 'black'></img>
                                </div>
                                <div>Inactive Ads</div>
                            </div>
                            <div>{card.inactiveAds}</div>      
                        </div>
                    </div>
                    </div>
                    </div>
                    </>   
                )
            })}

        </div>
    )
}