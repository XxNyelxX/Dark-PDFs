const toggleBtn = document.getElementById('darkModeToggle');

if (!toggleBtn) {
    console.error("Dark mode toggle button not found.");
} else {
    toggleBtn.addEventListener('click', async () => {
        const app = window.PDFViewerApplication;
        
        // Ensure PDF.js engine and preferences API are fully loaded
        if (!app || !app.preferences || !app.pdfViewer) return;

        try {
            // Capture current viewport state to maintain user context
            const currentPage = app.pdfViewer.currentPageNumber;
            const currentZoom = Math.round(app.pdfViewer.currentScale * 100);
            
            // Toggle color preferences
            const isCurrentlyDark = await app.preferences.get('forcePageColors');
            const isDarkMode = !isCurrentlyDark;
            
            await app.preferences.set('forcePageColors', isDarkMode);
            await app.preferences.set('pageColorsBackground', '#333333'); 
            await app.preferences.set('pageColorsForeground', '#ffffff'); 

            // Reconstruct URL with viewport hash and force engine reload
            const hash = `#page=${currentPage}&zoom=${currentZoom}`;
            const baseUrl = window.location.href.split('#')[0];
            
            window.location.replace(baseUrl + hash);
            window.location.reload();
            
        } catch (error) {
            console.error("Error during dark mode transition:", error);
        }
    });
}