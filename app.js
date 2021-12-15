const bt = document.querySelector('#bt')
bt.addEventListener('click', (d) => {
     d.preventDefault()
     const tx = document.querySelector('#tx').value
     const li = document.createElement('li')
     li.setAttribute('class', 'list-group-item')
     li.innerText = tx
     const lis = document.querySelector('#list')
     lis.appendChild(li)
 })
 const btn = document.querySelector('#list')
 btn.addEventListener('click',function(e){
     this.removeChild(e.target)
 })