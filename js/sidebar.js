function initializeSidebar() {
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar';
    sidebar.innerHTML = `
        <div class="sidebar-header">
            <h2>Rapid AI</h2>
        </div>
        <div class="sidebar-welcome">
            <div class="sidebar-welcome-avatar">
                <i data-lucide="user-check"></i>
            </div>
            <div class="sidebar-welcome-text">
                <p>Welcome,</p>
                <p>Admin</p>
            </div>
        </div>
        <div class="sidebar-menu">
            <div class="menu-item">
                <i data-lucide="layout-dashboard" class="icon"></i>
                <span>Dashboard</span>
            </div>
            <div class="menu-item">
                <i data-lucide="users" class="icon"></i>
                <span>Employees</span>
            </div>
            <div class="menu-item active">
                <i data-lucide="clock" class="icon"></i>
                <span>Attendance</span>
            </div>
            <div class="menu-item">
                <i data-lucide="calendar" class="icon"></i>
                <span>Leaves</span>
            </div>
            <div class="menu-item">
                <i data-lucide="dollar-sign" class="icon"></i>
                <span>Payrolls</span>
                <div class="dot"></div>
            </div>
            <div class="menu-item">
                <i data-lucide="palmtree" class="icon"></i>
                <span>Holidays</span>
            </div>
            <div class="menu-item">
                <i data-lucide="sun" class="icon"></i>
                <span>Daily</span>
            </div>
            <div class="menu-item">
                <i data-lucide="trending-up" class="icon"></i>
                <span>Performances</span>
            </div>
            <div class="menu-item">
                <i data-lucide="package" class="icon"></i>
                <span>Productions</span>
            </div>
        </div>
    `;
    
    document.querySelector('.dashboard-container').prepend(sidebar);
    lucide.createIcons();
}