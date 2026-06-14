# -*- coding: utf-8 -*-
# Generates a premium, trustworthy 1200x630 Open Graph card for alifindme.com landing-page links.
from PIL import Image, ImageDraw, ImageFont
from bidi.algorithm import get_display

W, H = 1200, 630
F = "C:/Windows/Fonts/"

def font(name, size):
    return ImageFont.truetype(F + name, size)

def he(s):
    # PIL renders LTR; bidi reorders Hebrew (and mixed Hebrew+latin/numbers) correctly.
    return get_display(s)

img = Image.new("RGB", (W, H), "#ffffff")
d = ImageDraw.Draw(img)

# --- Premium warm gradient background (cream -> soft blush) ---
top = (255, 252, 250)
bot = (250, 242, 240)
for y in range(H):
    t = y / H
    r = int(top[0] + (bot[0] - top[0]) * t)
    g = int(top[1] + (bot[1] - top[1]) * t)
    b = int(top[2] + (bot[2] - top[2]) * t)
    d.line([(0, y), (W, y)], fill=(r, g, b))

# --- Coral accent bar down the right edge (RTL side) ---
d.rectangle([W - 16, 0, W, H], fill="#ff6b6b")

# --- Soft decorative circles (depth, premium feel) ---
d.ellipse([-120, -120, 180, 180], fill="#ffe3e0")
d.ellipse([W - 260, H - 200, W - 20, H + 40], outline="#ffd0cb", width=18)

# --- Brand wordmark (top-right, RTL) ---
brand_f = font("segoeuib.ttf", 40)
brand = "ali find me"
bw = d.textlength(brand, font=brand_f)
d.text((W - 60 - bw, 56), brand, font=brand_f, fill="#ff6b6b")
# small dot logo
d.ellipse([W - 60 - bw - 58, 60, W - 60 - bw - 18, 100], fill="#ff6b6b")

# --- Main headline (Hebrew, RTL, right-aligned) ---
h1_f = font("segoeuib.ttf", 84)
h2_f = font("segoeuib.ttf", 84)
line1 = he("אופנה ומותגים")
line2 = he("במחירים מנצחים")
d.text((W - 60, 175), line1, font=h1_f, fill="#2b2d42", anchor="ra")
d.text((W - 60, 275), line2, font=h2_f, fill="#2b2d42", anchor="ra")

# --- Trust badges row (checkmark + Hebrew), right-aligned, stacked ---
badge_f = font("segoeuib.ttf", 38)
badges = ["משלוח חינם לישראל", "תשלום מאובטח ומוגן", "אלפי לקוחות מרוצים"]
y = 420
for b in badges:
    txt = he(b)
    tw = d.textlength(txt, font=badge_f)
    # text right-aligned
    d.text((W - 60, y), txt, font=badge_f, fill="#3a3d52", anchor="ra")
    # green check circle to the LEFT of the text (RTL leading side)
    cx = W - 60 - tw - 44
    cy = y + 22
    d.ellipse([cx - 20, cy - 20, cx + 20, cy + 20], fill="#34c759")
    d.line([(cx - 9, cy + 1), (cx - 2, cy + 9)], fill="#fff", width=5)
    d.line([(cx - 2, cy + 9), (cx + 11, cy - 8)], fill="#fff", width=5)
    y += 62

img.save("og-image.png", "PNG")
print("Saved og-image.png", img.size)
