const cameraFeed = document.getElementById('video');

async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({video: true});
        
        video.srcObject = stream
    } catch (error) {
        console.log("Error ao acessar a camera: ", error);
    }
}

startCamera()