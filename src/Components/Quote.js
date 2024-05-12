import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';


function Quote({ key, quoteData, handleViewFullQuote, handleShareQuote }) {

    return (
        <div key={key} style={{ textAlign: 'center', borderRadius: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
            <p style={{ fontSize: '20px', lineHeight: '1.2', fontWeight: 'bold' }}>{quoteData.character}</p>
            <img src={quoteData.image} alt={quoteData.character} style={{ width: '30%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
            <div style={{ padding: '10px' }}>
                <p style={{ marginBottom: '5px', fontSize: '14px', lineHeight: '1.2', maxHeight: '60px', overflow: 'hidden' }}
                >{quoteData.quote.length > 50 ? quoteData.quote.slice(0, 40) + '...' : quoteData.quote}</p>

                {/* Buttons for viewing full quote and sharing */}
                <Button
                    style={{
                        marginRight: '10px', fontSize: '9px', backgroundColor: 'white',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', color: 'black'
                    }}
                    onClick={() => handleViewFullQuote(quoteData)}>
                    View Full Quote
                </Button>

                <Button style={{ minWidth: '50px', width: 'auto', backgroundColor: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', color: 'black',}}
                    onClick={() => handleShareQuote(quoteData)}
                    startIcon={<ShareIcon style={{ fontSize: '16px' }} />}>
                </Button>
            </div>
        </div>
    )
}

export default Quote;