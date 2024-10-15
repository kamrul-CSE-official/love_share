import React from 'react';
import { Link } from 'react-router-dom';
// import FileSharing from '../components/share/fileSharing.jsx';

const ReceiveFile = () => {
    return (
        <div>
            <h1>This is reacive file page</h1>
            <Link to="/">Go Home</Link>
            {/* <FileSharing /> */}
        </div>
    );
};

export default ReceiveFile;