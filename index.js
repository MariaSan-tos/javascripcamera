const cameraFeed = document.getElementById('video');

setTimeout(() => {
    document.querySelector('h1').innerHTML = "BOOOO!! PRIMEIRO DE ABRIL!!!";
}, 2500);

async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({video: true});
        
        video.srcObject = stream;
    } catch (error) {
        console.log("Error ao acessar a camera: ", error);
    }
}

startCamera();
