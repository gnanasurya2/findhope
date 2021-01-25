import React, { useState, useRef, useCallback, useEffect } from "react";
import ReactCrop from "react-image-crop";
import styles from "../styles/ImageCropper.module.css";
import "react-image-crop/dist/ReactCrop.css";
import firebase from "../helpers/firebase";
import Button from "../components/PrimaryButton";

const pixelRatio = 4;
const ImageCropper = (props) => {
  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "px", width: 100, aspect: 1 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [Firebase, setFirebase] = useState(null);
  useEffect(() => {
    firebase.then((firebase) => setFirebase(firebase));
  }, []);
  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingEnabled = false;

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  }, [completedCrop]);

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  const getResizedCanvas = (canvas, newWidth, newHeight) => {
    const tmpCanvas = document.createElement("canvas");
    tmpCanvas.width = newWidth;
    tmpCanvas.height = newHeight;

    const ctx = tmpCanvas.getContext("2d");
    ctx.drawImage(
      canvas,
      0,
      0,
      canvas.width,
      canvas.height,
      0,
      0,
      newWidth,
      newHeight
    );

    return tmpCanvas;
  };

  const generateDownload = (previewCanvas, crop) => {
    if (!crop || !previewCanvas) {
      return;
    }

    const canvas = getResizedCanvas(previewCanvas, crop.width, crop.height);
    canvas.toBlob(
      (blob) => {
        const storageRef = Firebase.storage()
          .ref()
          .child(props.name + ".png");
        storageRef.put(blob).then((snapshot) => {
          storageRef.getDownloadURL().then((url) => props.submit(url));
        });
      },
      "image/png",
      1
    );
  };

  const onLoad = useCallback((img) => (imgRef.current = img), []);

  return (
    <div className={styles.wrapper}>
      <div>
        <input type="file" accept="image/*" onChange={onSelectFile} />
      </div>
      <ReactCrop
        src={upImg}
        onImageLoaded={onLoad}
        crop={crop}
        onChange={(c) => setCrop(c)}
        onComplete={(c) => setCompletedCrop(c)}
      />
      {completedCrop?.width || completedCrop?.height ? (
        <div
          className={styles.preview}
          style={{ width: completedCrop.width, height: completedCrop.height }}
        >
          <canvas
            ref={previewCanvasRef}
            style={{
              width: completedCrop?.width ?? 0,
              height: completedCrop?.height ?? 0,
            }}
          />
        </div>
      ) : null}
      {completedCrop?.width || completedCrop?.height ? (
        <Button
          type="button"
          onClick={() =>
            generateDownload(previewCanvasRef.current, completedCrop)
          }
        >
          Upload
        </Button>
      ) : null}
    </div>
  );
};

export default ImageCropper;
