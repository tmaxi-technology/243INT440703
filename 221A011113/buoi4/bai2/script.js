function themSinhVien() {
  const mssv = document.getElementById("mssv").value.trim();
  const hoten = document.getElementById("hoten").value.trim();
  const email = document.getElementById("email").value.trim();
  const noisinh = document.getElementById("noisinh").value;

  const genderRadio = document.querySelector('input[name="gender"]:checked');
  const gioitinh = genderRadio ? genderRadio.value : "";

  if (!mssv || !hoten || !email) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  const tbody = document.querySelector("#dssv tbody");

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${mssv}</td>
    <td>${hoten}</td>
    <td>${email}</td>
    <td>${gioitinh}</td>
    <td>${noisinh}</td>
  `;
  tbody.appendChild(row);

  // Xoá form sau khi thêm
  document.getElementById("mssv").value = "";
  document.getElementById("hoten").value = "";
  document.getElementById("email").value = "";
  document.querySelector('input[name="gender"][value="Nam"]').checked = true;
  document.getElementById("noisinh").selectedIndex = 0;
}
