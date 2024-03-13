import React from 'react';

export default function Footers() {
    const footerStyle = {
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        backgroundColor: "#f5f5f5",
        textAlign: "center"
    };

    return (
        <footer style={footerStyle}>
            <div className="mt-3">
                <div>
                    <span>2024 &copy;</span>
                    <span> IBI Kesatuan Bogor</span>
                </div>
            </div>
        </footer>
    );
}