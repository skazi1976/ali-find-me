# -*- coding: utf-8 -*-
# Premium 1200x630 Open Graph card for alifindme.com landing-page links.
# Clean two-panel layout: coral brand panel (left) + content (right, RTL).
from PIL import Image, ImageDraw, ImageFont, ImageFilter
from bidi.algorithm import get_display

W, H = 1200, 630
F = "C:/Windows/Fonts/"
PANEL = 430  # left coral panel width

def font(name, size):
    return ImageFont.truetype(F + name, size)

def he(s):
    return get_display(s)

def vgrad(draw, box, c1, c2):
    x0, y0, x1, y1 = box
    h = y1 - y0
    for i in range(h):
        t = i / max(1, h - 1)
        r = int(c1[0] + (c2[0] - c1[0]) * t)
        g = int(c1[1] + (c2[1] - c1[1]) * t)
        b = int(c1[2] + (c2[2] - c1[2]) * t)
        draw.line([(x0, y0 + i), (x1, y0 + i)], fill=(r, g, b))

img = Image.new("RGB", (W, H), "#ffffff")
d = ImageDraw.Draw(img)

# --- Right content area: clean soft warm gradient ---
vgrad(d, (PANEL, 0, W, H), (255, 255, 255), (250, 244, 242))

# --- Left brand panel: coral -> warm pink gradient ---
vgrad(d, (0, 0, PANEL, H), (255, 107, 107), (255, 138, 120))

# subtle large translucent circle inside the panel (depth, stays behind icon)
ov = Image.new("RGBA", (W, H), (0, 0, 0, 0))
od = ImageDraw.Draw(ov)
od.ellipse([-90, 280, 250, 620], fill=(255, 255, 255, 28))
od.ellipse([240, -120, 520, 160], fill=(255, 255, 255, 22))
img.paste(Image.alpha_composite(img.convert("RGBA"), ov).convert("RGB"), (0, 0))
d = ImageDraw.Draw(img)

# --- Brand wordmark (white, top of left panel) ---
brand_f = font("segoeuib.ttf", 38)
d.ellipse([60, 62, 92, 94], fill="#ffffff")
d.text((104, 60), "ali find me", font=brand_f, fill="#ffffff")

# --- Shopping-bag icon (white line art, centered in panel) ---
cx = PANEL // 2
by0, by1 = 250, 430          # bag body
bx0, bx1 = cx - 95, cx + 95
d.rounded_rectangle([bx0, by0, bx1, by1], radius=26, fill="#ffffff")
# handle (arc)
d.arc([cx - 52, by0 - 78, cx + 52, by0 + 52], start=180, end=360, fill="#ffffff", width=16)
# coral cut-outs to make it look like a bag (smile + handle holes)
d.arc([cx - 38, by0 + 18, cx + 38, by0 + 86], start=20, end=160, fill="#ff6b6b", width=12)

# --- Headline (Hebrew, RTL, right-aligned) ---
h_f = font("segoeuib.ttf", 80)
d.text((W - 64, 150), he("אופנה ומותגים"), font=h_f, fill="#1f2233", anchor="ra")
d.text((W - 64, 248), he("במחירים מנצחים"), font=h_f, fill="#1f2233", anchor="ra")
# coral accent underline under headline
d.rounded_rectangle([W - 64 - 150, 360, W - 64, 369], radius=5, fill="#ff6b6b")

# --- Trust badges as clean pill chips (right-aligned, stacked) ---
badge_f = font("segoeuib.ttf", 34)
badges = ["משלוח חינם לישראל", "תשלום מאובטח ומוגן", "אלפי לקוחות מרוצים"]
y = 410
for b in badges:
    txt = he(b)
    tw = d.textlength(txt, font=badge_f)
    pad = 28
    gap = 24                          # breathing room between check and text
    chip_w = pad + 44 + gap + tw + pad
    chip_h = 60
    x_right = W - 64
    x_left = x_right - chip_w
    # pill background
    d.rounded_rectangle([x_left, y, x_right, y + chip_h], radius=30, fill="#ffffff",
                        outline="#ffe0db", width=2)
    # text (right side of pill)
    d.text((x_right - pad, y + chip_h / 2), txt, font=badge_f, fill="#33364d", anchor="rm")
    # green check circle (left side of pill)
    gcx = x_left + pad + 22
    gcy = y + chip_h / 2
    d.ellipse([gcx - 21, gcy - 21, gcx + 21, gcy + 21], fill="#22c55e")
    d.line([(gcx - 9, gcy + 1), (gcx - 2, gcy + 9)], fill="#fff", width=5)
    d.line([(gcx - 2, gcy + 9), (gcx + 11, gcy - 9)], fill="#fff", width=5)
    y += 72

img.save("og-image.png", "PNG")
print("Saved og-image.png", img.size)
