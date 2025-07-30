function initializeHeader() {
    const header = document.createElement('div');
    header.className = 'header';
    header.innerHTML = `
        <div class="logo">Rapid AI</div>
        <div class="header-right">
            <button class="import-button">
                <i data-lucide="plus"></i>
                <span>Import</span>
            </button>
            <div class="language-selector">
                <i data-lucide="globe"></i>
                <span>English</span>
            </div>
            <div class="admin-profile">
                <div class="admin-avatar">
                    <i data-lucide="user-check"></i>
                </div>
                <span>Admin</span>
            </div>
        </div>
    `;
    
    document.querySelector('.main-content').prepend(header);
    lucide.createIcons();
}