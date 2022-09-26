const containers = document.querySelectorAll(".container-description")


function onHover() {
    containers.forEach(container => {
        container.addEventListener('mouseover',() => {
    
            container.classList.add('activate')
    
        })
    })
}

function onMouseOut() {
    
}

