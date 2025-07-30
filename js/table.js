function initializeTable() {
    const tableData = [
        { id: "01", name: "EMP Contract", shift: "Night Shift", inTime: "00:00", outTime: "00:00", verified: "✓", status: "Weekly Off" },
        { id: "02", name: "EMP Monthly", shift: "Evening Shift", inTime: "02:00", outTime: "22:00", verified: "✗", status: "Absent" },
        { id: "03", name: "Emp Weekly", shift: "Day Shift", inTime: "09:00", outTime: "17:00", verified: "✓", status: "Absent" },
        { id: "04", name: "EMP Hourly", shift: "Day Shift", inTime: "09:00", outTime: "17:00", verified: "✓", status: "Absent" },
        { id: "05", name: "EMP Unit", shift: "Day Shift", inTime: "09:00", outTime: "17:00", verified: "✗", status: "Absent" }
    ];

    const contentArea = document.querySelector('.content-area');
    contentArea.innerHTML = `
        <div class="flex items-center justify-between mb-6">
            <h1 class="text-2xl font-bold">Daily Attendance</h1>
        </div>
        
        <div class="table-container shadow">
            <div class="table-filters">
                <div class="filter-group">
                    <label>Daily Attendance</label>
                    <select>
                        <option>All Departments</option>
                        <option>HR</option>
                        <option>IT</option>
                        <option>Finance</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label>Shift</label>
                    <select>
                        <option>All Shifts</option>
                        <option>Day Shift</option>
                        <option>Night Shift</option>
                        <option>Evening Shift</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label>Date</label>
                    <input type="text" id="date-filter" value="02/02/2021">
                </div>
                <div class="filter-group">
                    <label>Verification Status</label>
                    <select>
                        <option>All</option>
                        <option>Verified</option>
                        <option>Unverified</option>
                    </select>
                </div>
                <button class="get-employees">Get Employees</button>
            </div>
            
            <div class="table-controls">
                <div class="entries-selector">
                    <span>Show</span>
                    <select>
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                    </select>
                    <span>entries</span>
                </div>
                <div class="search-box">
                    <i data-lucide="search"></i>
                    <input type="text" placeholder="Search...">
                </div>
            </div>
            
            <div class="overflow-x-auto">
                <table>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Shift</th>
                            <th>In Time</th>
                            <th>Out Time</th>
                            <th>Face Verified</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody id="attendance-data">
                        ${tableData.map(row => `
                            <tr>
                                <td>${row.id}</td>
                                <td>${row.name}</td>
                                <td>${row.shift}</td>
                                <td>${row.inTime}</td>
                                <td>${row.outTime}</td>
                                <td class="${row.verified === '✓' ? 'face-verified' : 'face-unverified'}">${row.verified}</td>
                                <td>
                                    <select class="status-select ${row.status === 'Absent' ? 'status-absent' : 'status-weekly-off'}">
                                        <option>${row.status}</option>
                                        <option>Present</option>
                                        <option>Absent</option>
                                        <option>Late</option>
                                    </select>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            <div class="table-footer">
                <div>Showing 1 to ${tableData.length} of ${tableData.length} entries</div>
                <div class="pagination">
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>
        </div>
        
        <button class="submit-button">Submit</button>
        
        <!-- Floating Action Button -->
        <button class="fab">
            <i data-lucide="camera"></i>
        </button>
    `;
    
    // Add event listeners for status dropdowns
    document.querySelectorAll('.status-select').forEach(select => {
        select.addEventListener('change', function() {
            if (this.value === 'Absent') {
                this.className = 'status-select status-absent';
            } else if (this.value === 'Weekly Off') {
                this.className = 'status-select status-weekly-off';
            } else {
                this.className = 'status-select';
            }
        });
    });
    
    lucide.createIcons();
}