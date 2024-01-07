const audioList = document.querySelectorAll("audio")


audioList.forEach(audio => {
  audio.addEventListener('play', () =>{
    alert("Test123")
  })
})
