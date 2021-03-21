let container = document.querySelector(".options-container"),
    flag = document.querySelectorAll('.radio');

  flag.forEach(obj => {
    obj.addEventListener('click', (e) =>{
      if(obj.id === 'ua'){
        document.querySelector('#output').value = '+380';
      }
      if(obj.id === 'rus'){
        document.querySelector('#output').value = '+7';
      }
      if(obj.id === 'blr'){
        document.querySelector('#output').value = '+375';
      }
      if(obj.id === 'frc'){
        document.querySelector('#output').value = '+33';
      }
      if(obj.id === 'cnd'){
        document.querySelector('#output').value = '+1';
      }
      if(obj.id === 'usa'){
        document.querySelector('#output').value = '+1';
      }
    })
  })



