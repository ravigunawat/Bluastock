const ipoData = JSON.parse(localStorage.getItem('ipoData') || '[]');

const tbody = document.querySelector("#ipoTable tbody");
ipoData.forEach((ipo, i) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${ipo.company}</td>
    <td>${ipo.price_band}</td>
    <td>${ipo.open_date}</td>
    <td>${ipo.close_date}</td>
    <td>${ipo.issue_size}</td>
    <td>${ipo.issue_type}</td>
    <td>${ipo.listing_date}</td>
    <td><span class="status ${ipo.status.replace(" ", "-").toLowerCase()}">${ipo.status}</span></td>
    <td><button class="btn-update">Update</button></td>
  `;
  tbody.appendChild(row);
});
