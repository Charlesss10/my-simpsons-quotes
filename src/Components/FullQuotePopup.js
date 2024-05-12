import Button from '@mui/material/Button';

function FullQuotePopup({ selectedQuote, handleCloseFullQuote }) {
    return (
        <div style={{ textAlign: 'center', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999 }}>
            <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white',
                padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', textAlign: 'center'
            }}>
                <p style={{ marginBottom: '5px', fontSize: '20px', }}>{selectedQuote.quote}</p>
                <p style={{ fontFamily: 'Arial', fontSize: '15px', fontWeight: 'bold' }}>{selectedQuote.character}</p>
                <Button style={{
                    fontSize: '9px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    backgroundColor: 'white', color: 'black'
                }} onClick={handleCloseFullQuote}>Close´
                </Button>
            </div>

        </div>
    )
}

export default FullQuotePopup;