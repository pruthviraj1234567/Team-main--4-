function saveProfile() {
    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
  
    localStorage.setItem('profileName', name);
    localStorage.setItem('profileBio', bio);
  }
  
  document.getElementById('upload').addEventListener('change', function() {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('avatar').src = e.target.result;
      localStorage.setItem('profilePic', e.target.result);
    }
    reader.readAsDataURL(this.files[0]);
  });
  
  window.onload = function() {
    if(localStorage.getItem('profileName')) {
      document.getElementById('name').value = localStorage.getItem('profileName');
    }
    if(localStorage.getItem('profileBio')) {
      document.getElementById('bio').value = localStorage.getItem('profileBio');
    }
    if(localStorage.getItem('profilePic')) {
      document.getElementById('avatar').src = localStorage.getItem('profilePic');
    }
  }
  