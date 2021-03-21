const fileInput = document.querySelector('.dfltBtn'),

      img = document.querySelector('.avatar-photo');

fileInput.addEventListener('change', () => {
  const file = this.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = function(){
      const result = reader.result;
      img.src = result;
    }
    reader.readAsDataURL(file);
  }
})