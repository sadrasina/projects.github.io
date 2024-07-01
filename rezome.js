function toggleSubItems(item) {
    var subItems = item.nextElementSibling;
    if (subItems.style.display === 'none') {
      subItems.style.display = 'block';
    } else {
      subItems.style.display = 'none';
    }
  }