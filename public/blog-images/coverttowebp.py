from pathlib import Path
from PIL import Image

QUALITY = 85
folder = Path(__file__).parent

for image_path in folder.iterdir():
    if image_path.suffix.lower() not in {".jpg", ".jpeg", ".png"}:
        continue

    webp_path = image_path.with_suffix(".webp")

    try:
        with Image.open(image_path) as img:
            if img.mode not in ("RGB", "RGBA"):
                img = img.convert("RGBA" if "A" in img.mode else "RGB")

            img.save(webp_path, "WEBP", quality=QUALITY, method=6)
            image_path.unlink()

            print(f"Converted {image_path.name}")

    except Exception as e:
        print(f"Failed {image_path.name}: {e}")

print("Finished.")