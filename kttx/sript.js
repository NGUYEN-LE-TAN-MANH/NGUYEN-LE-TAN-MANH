function xemChiTiet(tenHoatDong, diemThuong) {
    document.getElementById('tenHoatDong').textContent = 'Hoạt động: ' + tenHoatDong;
    document.getElementById('diemThuong').textContent = 'Điểm thưởng: ' + diemThuong;
    document.getElementById('hoatDongDaChon').style.display = 'block';
    document.getElementById('hoatDongDaChon').scrollIntoView({ behavior: 'smooth' });
}

