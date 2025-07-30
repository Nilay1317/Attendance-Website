document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeSidebar();
    initializeHeader();
    initializeTable();
    initializeModal();
    
    // Set current date in filter
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    });
    document.getElementById('date-filter').value = formattedDate;
});

function initializeModal() {
    const modal = document.getElementById('biometric-modal');
    const fab = document.querySelector('.fab');
    const closeModal = document.querySelector('.close-modal');
    
    fab.addEventListener('click', () => {
        modal.style.display = 'block';
    });
    
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Simulate face verification
    document.getElementById('verify-button').addEventListener('click', function() {
        const result = Math.random() > 0.3 ? 'success' : 'failed';
        showVerificationResult(result);
    });
}

function showVerificationResult(result) {
    const resultDiv = document.getElementById('verification-result');
    const resultIcon = document.getElementById('result-icon');
    const resultText = document.getElementById('result-text');
    const resultDesc = document.getElementById('result-desc');
    
    if (result === 'success') {
        resultIcon.innerHTML = '<i data-lucide="check-circle"></i>';
        resultIcon.className = 'text-success';
        resultText.textContent = 'Verification Successful';
        resultText.className = 'text-success';
        resultDesc.textContent = 'Employee identity confirmed. Attendance recorded.';
    } else {
        resultIcon.innerHTML = '<i data-lucide="x-circle"></i>';
        resultIcon.className = 'text-danger';
        resultText.textContent = 'Verification Failed';
        resultText.className = 'text-danger';
        resultDesc.textContent = 'Face not recognized. Please try again or contact admin.';
    }
    
    lucide.createIcons();
    resultDiv.style.display = 'flex';
}