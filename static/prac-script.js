let controls = null;
async function startRead(){
    const codeReader = new ZXingBrowser.BrowserQRCodeReader();
    const sourceElem = document.querySelector('video');
    const controls = await codeReader.decodeFromVideoElement(sourceElem, (result, error, controls) => {
        // use the result and error values to choose your actions
        // you can also use controls API in this scope like the controls
        // returned from the method.
        if (result){
          console.log("re",result);
            
        }
        if (error){
            // console.log("err",error);
        }

      });

    return controls
}

let isCameraOn = false;
let stream = null;

async function startCamera() {
  let facingMode = "user"
  if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
    facingMode = { exact: "environment" }
  } 
  try {
    
    stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        width: 640, height: 480,
        facingMode:facingMode
      }
    })
    const videoElement = document.getElementById('video');
    videoElement.srcObject = stream;
    isCameraOn = true;
  } catch (err) {
    console.error('カメラの起動に失敗しました:', err);
    isCameraOn = false;
  }
}

 function stopCamera() {
  if (stream && stream.getTracks().length > 0) {
    stream.getTracks().forEach((track) => {
        console.log("track stop");
        track.stop();
    });
    isCameraOn = false;
  }
}

document.getElementById('toggleButton').addEventListener('click', () => {
    console.log("clicked");
  if (isCameraOn) {
    stopCamera();
    document.getElementById('toggleButton').textContent = 'カメラをオンにする';
  } else {
    startCamera();
    controls =  startRead();
    document.getElementById('toggleButton').textContent = 'カメラをオフにする';
  }
});

