function themSinhVien() {
    const mssv = document.getElementById("mssv").value.trim();
    const hoten = document.getElementById("hoten").value.trim();
    const email = document.getElementById("email").value.trim();
    const noisinh = document.getElementById("noisinh").value;

    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (mssv === "" || hoten === "" || email === "") {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }

    const tableBody = document.querySelector("#bangSinhVien tbody");

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${mssv}</td>
        <td>${hoten}</td>
        <td>${email}</td>
        <td>${gender}</td>
        <td>${noisinh}</td>
    `;
    tableBody.appendChild(newRow);

    // Xóa form sau khi thêm
    document.getElementById("mssv").value = "";
    document.getElementById("hoten").value = "";
    document.getElementById("email").value = "";
    document.querySelector('input[name="gender"][value="Nam"]').checked = true;
    document.getElementById("noisinh").value = "TP.HCM";
}
