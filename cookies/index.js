const modal = document.getElementById('modal')
const modalBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const modalInner = document.getElementById('modal-inner')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtn = document.getElementById('modal-choice-btns')

setTimeout(function(){
    modal.style.display = 'inline'
},1500)

modalBtn.addEventListener('click',function(){
    modal.style.display = 'none'
})

consentForm.addEventListener('submit',function(e){
   
   const userInfo = new FormData(consentForm)
   
  const name = userInfo.get('fullName')
  const email = userInfo.get('email')
   
   
 
   
    e.preventDefault()
    modalText.innerHTML =`
        <div class="modal-inner-loading">
        <img src="https://media.giphy.com/media/hL9q5k9dk9l0wGd4e0/giphy.gif" class="loading" height="100px>
        <p id="upload-Text">
        Uploading your data to the dark web...
        </p>
    </div>
    `

  setTimeout(function(){
    modalText.innerHTML =`
    <div class="modal-inner-loading">
    <img src="https://media.giphy.com/media/hL9q5k9dk9l0wGd4e0/giphy.gif" class="loading" height="100px>
    <p id="upload-Text">
    Making the sale...
    </p>
</div>
`
  },1500)

    setTimeout(function(){
        modalInner.innerHTML = `
                <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
                <p>We just sold the rights to your eternal soul.</p>
                <div class="idiot-gif">
                    <img src="https://media.giphy.com/media/tMyCJmeXHBetq/giphy.gif">
                </div>
            `
            modalBtn.disabled = false;
    },3000)
    
})

declineBtn.addEventListener('mouseover',function(){
   modalChoiceBtn.classList.toggle('reverse');
})