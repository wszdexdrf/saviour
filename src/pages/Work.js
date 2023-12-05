// Work.js
import React from 'react';

function Work() {
    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ color: 'orange', WebkitTextStroke: '1px white' }}>Manage Torrents</h1>
            <iframe src="http://127.0.0.1:9091/transmission/web/" title="Torrent Manager" width="100%" height="500px" />
        </div>
    );
}

export default Work;