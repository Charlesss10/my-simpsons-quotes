function Loading(){
      // Render loading screen if quotes are being fetched
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading Quotes...</p>
      </div>
    )
}

export default Loading;