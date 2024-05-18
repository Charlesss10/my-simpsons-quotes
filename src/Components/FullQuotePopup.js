import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function FullQuotePopup({ selectedQuote, handleCloseFullQuote }) {

    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999 }}>
            <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white',
                padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', textAlign: 'center'
            }}>
                 <FontAwesomeIcon icon={faTimes} style={{ position: 'abosolute', top: '10px', 
                 cursor: 'pointer', fontSize: '20px', color: '#888' }} onClick={handleCloseFullQuote} />
                <p style={{ marginBottom: '5px', fontSize: '20px', fontStyle: 'italic'}}>{selectedQuote.quote}</p>
                <p style={{ fontFamily: 'Arial', fontSize: '15px', fontWeight: 'bold'}}>{selectedQuote.character}</p>
            </div>

        </div>
    )
}

export default FullQuotePopup;