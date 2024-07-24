

function updateRowColor(checkbox) {
    const row = checkbox.closest('tr');
    const checkboxes = row.getElementsByTagName('input');

    // Remove previous status classes
    row.classList.remove('asistio', 'noAsistio', 'excusa');

    // Add the status class of the checked checkbox
    for (const box of checkboxes) {
        if (box.checked) {
            row.classList.add(box.getAttribute('data-status'));
        }
    }
    for (const box of checkboxes) {
        if (box.checked) {
            row.classList.add(box.getAttribute('data-status'));
        }
    }
}


function saveAttendance() {
    Swal.fire({
        icon: 'success',
        title: 'Asistencia guardada',
        text: 'Los registros de asistencia se han guardado correctamente',
    });
    const table = document.getElementById('attendanceTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    const attendanceData = [];

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const alumno = cells[0].innerText;
        const dia = cells[1].innerText;
        const asistio = cells[2].getElementsByTagName('input')[0].checked;
        const noAsistio = cells[3].getElementsByTagName('input')[0] .checked;
        const excusa = cells[4].getElementsByTagName('input')[0].checked;
        const comentario = cells[5].getElementsByTagName('input')[0].value;

        attendanceData.push({
            alumno,
            dia,
            asistio,
            noAsistio,
            excusa,
            comentario
        });
    }

    console.log(attendanceData);
    // alert('Asistencia guardada en la consola.');
}
