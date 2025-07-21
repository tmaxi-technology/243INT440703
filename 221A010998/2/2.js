function themSinhVien() {
    const mssv = document.getElementById('mssv').value.trim();
    const hoten = document.getElementById('hoten').value.trim();
    const email = document.getElementById('email').value.trim();
    const noisinh = document.getElementById('noisinh').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (!mssv || !hoten || !email) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    const table = document.getElementById('sinhvienTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).innerText = mssv;
    newRow.insertCell(1).innerText = hoten;
    newRow.insertCell(2).innerText = email;
    newRow.insertCell(3).innerText = gender;
    newRow.insertCell(4).innerText = noisinh;

    // Xóa form sau khi thêm
    document.getElementById('mssv').value = '';
    document.getElementById('hoten').value = '';
    document.getElementById('email').value = '';
    document.getElementById('noisinh').selectedIndex = 0;
    document.querySelector('input[name="gender"][value="Nam"]').checked = true;
  }