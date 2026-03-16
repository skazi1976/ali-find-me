"""Generate PWA icons as simple PNGs using pure Python"""
import struct, zlib

def create_png(width, height, bg_color, icon_size):
    """Create a simple PNG with a colored background and magnifying glass icon"""
    # Create pixel data
    pixels = []
    cx, cy = width // 2, height // 2
    r_outer = icon_size // 2
    r_inner = r_outer - max(icon_size // 10, 3)
    r_glass = int(r_outer * 0.65)
    r_glass_inner = int(r_glass * 0.75)

    for y in range(height):
        row = [0]  # filter byte
        for x in range(width):
            # Distance from center
            dx = x - cx
            dy = y - (cy - icon_size // 8)
            dist = (dx*dx + dy*dy) ** 0.5

            # Handle line (bottom-right diagonal)
            hx = x - (cx + int(r_glass * 0.55))
            hy = y - (cy - icon_size // 8 + int(r_glass * 0.55))
            # Rotate 45 degrees check
            line_along = (hx + hy) / 1.414
            line_perp = abs((hx - hy) / 1.414)
            handle_w = max(icon_size // 12, 2)

            is_handle = (0 <= line_along <= r_outer * 0.6) and (line_perp <= handle_w)
            is_ring = (r_glass_inner <= dist <= r_glass)
            is_glass_fill = (dist < r_glass_inner)

            # Background circle
            bg_dist = ((x - cx)**2 + (y - cy)**2) ** 0.5
            in_bg_circle = bg_dist < (width * 0.42)

            if is_ring or is_handle:
                row.extend([255, 255, 255, 255])  # white
            elif is_glass_fill:
                row.extend([255, 255, 255, 80])  # semi-transparent white
            elif in_bg_circle:
                row.extend(list(bg_color) + [255])
            else:
                row.extend(list(bg_color[:3]) + [255])
        pixels.append(bytes(row))

    raw_data = b''.join(pixels)

    def chunk(chunk_type, data):
        c = chunk_type + data
        crc = zlib.crc32(c) & 0xFFFFFFFF
        return struct.pack('>I', len(data)) + c + struct.pack('>I', crc)

    # PNG signature
    sig = b'\x89PNG\r\n\x1a\n'

    # IHDR
    ihdr = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)  # 8-bit RGBA

    # IDAT
    compressed = zlib.compress(raw_data, 9)

    # IEND
    png = sig + chunk(b'IHDR', ihdr) + chunk(b'IDAT', compressed) + chunk(b'IEND', b'')
    return png

# Generate icons
bg = (108, 92, 231)  # --primary color #6C5CE7

print("Generating 192x192 icon...")
png192 = create_png(192, 192, bg, 100)
with open("icon-192.png", "wb") as f:
    f.write(png192)
print(f"icon-192.png: {len(png192)} bytes")

print("Generating 512x512 icon...")
png512 = create_png(512, 512, bg, 260)
with open("icon-512.png", "wb") as f:
    f.write(png512)
print(f"icon-512.png: {len(png512)} bytes")

print("Done!")
