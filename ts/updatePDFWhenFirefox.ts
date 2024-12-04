function insertPDFViewer(sectionId: string, pdfPath: string) {
    try {
        const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
        const pdfContainer = document.querySelector(`#${sectionId} .section-container h2`);

        if (pdfContainer) {
            const content = isFirefox ?
                `<object data="${pdfPath}"
                type="application/pdf"
                class="iframeBorderWebpages"
                ><p>Your browser does not support PDFs. Please download the PDF to view it: <a href="${pdfPath}">Download PDF</a>.</p>
            </object>`
                :
                `<iframe src="${pdfPath}"  
            class="iframeBorderWebpages"
            frameborder="0"
            ></iframe>`;
            pdfContainer.insertAdjacentHTML('afterend', content);
        } else {
            console.log(`The h2 element inside of ${sectionId} .section-container was not found`);
        }
    } catch (error) {
        console.log(`An error occurred while trying to insert the PDF viewer for '${sectionId}':`, error);
    }
}

insertPDFViewer('resume','pdfs/Zachary_Muzzleman_Resume1.0.13.pdf');