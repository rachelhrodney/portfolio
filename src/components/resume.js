import React, { Component } from 'react';
import resumeData from '../resumeData';
//import { Document, Page } from 'react-pdf';
import { pdfjs , Document, Page} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default  class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <Document
        file="Resume.pdf"
        ><Page pageNumber={1} /></Document>
      </section>
    );
  }
}
