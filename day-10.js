/*
Question:
Implement a function to check and uncheck all checkboxes at once
*/

function checkUncheckAll() {
  const checkboxesSelected = document.querySelectorAll('.checkboxes');
  //   console.log(checkboxesSelected);

  const allChecked = [...checkboxesSelected].every(
    (element) => element.checked
  );

  checkboxesSelected.forEach((element) => {
    element.checked = !allChecked;
  });
}
