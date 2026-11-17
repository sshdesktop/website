"""
Convert all WebP screenshots to high-quality JPEG fallbacks
"""
import os
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCREENSHOTS_DIR = os.path.join(ROOT, 'assets', 'images', 'screenshots')

webp_files = [f for f in os.listdir(SCREENSHOTS_DIR) if f.endswith('.webp')]
print(f"Found {len(webp_files)} WebP screenshots to convert to JPEG fallbacks.")

converted = 0
for filename in webp_files:
    base_name = os.path.splitext(filename)[0]
    webp_path = os.path.join(SCREENSHOTS_DIR, filename)
    jpg_path = os.path.join(SCREENSHOTS_DIR, f"{base_name}.jpg")
    
    with Image.open(webp_path) as im:
        if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
            # Convert transparent backgrounds to crisp white
            bg = Image.new('RGB', im.size, (255, 255, 255))
            if im.mode == 'P':
                im = im.convert('RGBA')
            bg.paste(im, mask=im.split()[-1])
            bg.save(jpg_path, 'JPEG', quality=85, optimize=True)
        else:
            im.convert('RGB').save(jpg_path, 'JPEG', quality=85, optimize=True)
            
    converted += 1
    size_kb = os.path.getsize(jpg_path) / 1024
    print(f"  [{converted}/{len(webp_files)}] Created {base_name}.jpg ({size_kb:.1f} KB)")

print(f"\n✅ Successfully generated {converted} JPEG fallbacks in {SCREENSHOTS_DIR}!")
