import React from "react"



function Foot() {
    const stilFuter = {
        backgroundColor: '#242424',
        padding: "20px 13px",
        position: 'relative',
        left:0,
        bottom: 0,
        width: "100%"
    }
    const stilFuterText = {
        color: 'white',
        padding: "10px 13px"
    }
    return(
        <footer style={stilFuter}>
            <div className="footer">
                <center><p style={stilFuterText}>© 2020 Copyright: Jelena Todorović </p></center>
            </div>
        </footer>
    )
}

export default Foot