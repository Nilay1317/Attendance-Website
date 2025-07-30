
const leaveForm = document.getElementById('leaveForm');
const leaveTableBody = document.getElementById('leaveTableBody');
const statusFilter = document.getElementById('statusFilter');
const balanceStatus = document.getElementById('balanceStatus');

let leaveBalance = 20;
let leaveRequests = [];

leaveForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const reason = document.getElementById('reason').value;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = (end - start) / (1000 * 60 * 60 * 24) + 1;

    if (days <= 0) {
        balanceStatus.textContent = "Invalid date range.";
        return;
    }

    if (days > leaveBalance) {
        balanceStatus.textContent = "Insufficient leave balance.";
        return;
    }

    leaveBalance -= days;
    balanceStatus.textContent = `Leave applied successfully. Remaining balance: ${leaveBalance}`;

    leaveRequests.push({
        id: leaveRequests.length + 1,
        name: "John Doe",
        startDate,
        endDate,
        reason,
        status: "Pending"
    });

    renderTable();
});

statusFilter.addEventListener('change', renderTable);

function renderTable() {
    const filter = statusFilter.value;
    leaveTableBody.innerHTML = "";

    leaveRequests.forEach(req => {
        if (filter === "All" || req.status === filter) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${req.id}</td>
                <td>${req.name}</td>
                <td>${req.startDate}</td>
                <td>${req.endDate}</td>
                <td>${req.reason}</td>
                <td class="status-${req.status.toLowerCase()}">${req.status}</td>
            `;
            leaveTableBody.appendChild(row);
        }
    });
}
