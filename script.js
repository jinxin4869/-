document.addEventListener("mousemove", (e) => {
    const stars = document.getElementById("stars")
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight

    stars.style.transform = `translate(${x * 50}px, ${y * 50}px)`
})

