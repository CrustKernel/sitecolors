function mudar() {
    
    let data = new Date()
    let hora = data.getHours()
 
    

    if (hora >= 0 && hora < 12) {
        document.body.style.background = 'rgb(37, 2, 2)'
        document.body.style.color = 'white'
   
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background = 'rgb(73, 8, 8)'
        document.body.style.color = 'white'
        
    } else {
        document.body.style.background = 'rgb(143, 17, 17)'
        document.body.style.color = 'white'
    }

}