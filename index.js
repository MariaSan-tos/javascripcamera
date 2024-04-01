const cameraFeed = document.getElementById('video');

async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({video: true});
        
        video.srcObject = stream;
    } catch (error) {
        console.log("Error ao acessar a camera: ", error);
    }
}

startCamera();

setTimeout(() => {
    document.querySelector('h1').innerHTML = "BOOOO!! PRIMEIRO DE ABRIL!!!";
}, 3000);

setTimeout(() => {
    window.alert("VOCÊ É A PIADA!");
}, 3100);

setTimeout(() => {
    document.querySelector('h1').innerHTML = "kkkk VOCÊ É A PIADA!";
}, 3900);
