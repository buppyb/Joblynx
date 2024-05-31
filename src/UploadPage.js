// src/UploadPage.js
import React, { useState } from 'react';
import './UploadPage.css';

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      fetch('https://your-upload-endpoint.com/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('File uploaded successfully:', data);
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
    }
  };

  return (
    <div className="upload-page">
      <h1>Upload Your Resume</h1>
      <div className="upload-container">
        <input type="file" id="fileInput" onChange={handleFileChange} />
        <label htmlFor="fileInput" className="upload-label">
          <img src="upload-icon.png" alt="Upload Icon" className="upload-icon" />
          <p>Click the button above or drop your resume in here.</p>
          <p>English resumes in <strong>PDF</strong> (or <strong>DOCX</strong>) only. Max 2MB file size.</p>
        </label>
      </div>
      <div className="privacy-note">
        <p>🔒 We're committed to your privacy. Your resume is processed securely on our servers and is private to you.</p>
      </div>
    </div>
  );
};

export default UploadPage;
