function deleteData(_id) {
  const f = document.deleteForm;
  f._id.value = _id;
  f.submit();
}
