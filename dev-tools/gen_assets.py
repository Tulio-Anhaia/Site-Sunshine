#!/usr/bin/env python3
"""Generates placeholder SVG brand assets for the Sunshine Esportes site."""
import os

IMG_DIR = "/tmp/sunshine-esportes/img"
os.makedirs(IMG_DIR, exist_ok=True)

# ---- shared icon paths (simple line-art, stroke-based, drawn around a 0-200 box) ----
ICONS = {
    "running": '''
        <circle cx="103" cy="48" r="12"/>
        <path d="M100 60 L92 92 L60 108" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M100 60 L118 86 L146 78" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M92 92 L70 146" stroke-width="9" fill="none" stroke-linecap="round"/>
        <path d="M92 92 L118 130 L104 158" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    ''',
    "bike": '''
        <circle cx="55" cy="132" r="30" fill="none" stroke-width="8"/>
        <circle cx="151" cy="132" r="30" fill="none" stroke-width="8"/>
        <path d="M55 132 L92 76 L128 132 M92 76 L104 132 M104 132 L151 132 M92 76 L78 50 L104 50" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="104" cy="50" r="10"/>
    ''',
    "triathlon": '''
        <path d="M30 150 Q45 138 60 150 T90 150 T120 150 T150 150 T180 150" fill="none" stroke-width="8" stroke-linecap="round"/>
        <circle cx="118" cy="56" r="12"/>
        <path d="M115 68 L104 100 L128 112" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M104 100 L86 128" stroke-width="8" fill="none" stroke-linecap="round"/>
        <path d="M128 112 L150 100" stroke-width="8" fill="none" stroke-linecap="round"/>
        <circle cx="55" cy="118" r="22" fill="none" stroke-width="7"/>
    ''',
    "walking": '''
        <circle cx="100" cy="46" r="12"/>
        <path d="M100 58 L96 100 L72 118" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M100 58 L112 96 L138 90" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M96 100 L118 150" stroke-width="9" fill="none" stroke-linecap="round"/>
        <path d="M96 100 L84 152" stroke-width="9" fill="none" stroke-linecap="round"/>
    ''',
    "trail": '''
        <path d="M20 150 L70 70 L100 110 L130 55 L182 150 Z" fill="none" stroke-width="8" stroke-linejoin="round"/>
        <circle cx="132" cy="40" r="14"/>
    ''',
    "kids": '''
        <circle cx="70" cy="60" r="16"/>
        <path d="M70 76 L64 116 L44 136" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M70 76 L84 108 L110 100" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M64 116 L80 152" stroke-width="9" fill="none" stroke-linecap="round"/>
        <path d="M130 90 l10 -22 10 22 -10 -6 z" fill="currentColor" stroke="none"/>
        <path d="M150 60 l8 -18 8 18 -8 -5 z" fill="currentColor" stroke="none"/>
    ''',
}

def icon_svg(name, size=120, color="#FFFFFF"):
    body = ICONS[name]
    return f'''<svg width="{size}" height="{size}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="color:{color}">
<g fill="none" stroke="{color}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">{body}</g>
</svg>'''


def banner(filename, w, h, c1, c2, icon, angle=135, pattern_seed=1, icon_size_ratio=0.42):
    """Full gradient banner with soft circles + one big icon watermark. No baked text (text goes in HTML)."""
    icon_size = int(min(w, h) * icon_size_ratio)
    icon_x = w - icon_size - int(w*0.04)
    icon_y = (h - icon_size)//2
    gid = f"g{pattern_seed}"
    circles = ""
    import random
    random.seed(pattern_seed)
    for i in range(6):
        cx = random.randint(0, w)
        cy = random.randint(0, h)
        r = random.randint(int(h*0.08), int(h*0.28))
        circles += f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="#ffffff" opacity="{0.03+0.02*(i%3)}"/>\n'
    icon_inner = ICONS[icon]
    svg = f'''<svg width="{w}" height="{h}" viewBox="0 0 {w} {h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="{gid}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{c1}"/>
      <stop offset="100%" stop-color="{c2}"/>
    </linearGradient>
  </defs>
  <rect width="{w}" height="{h}" fill="url(#{gid})"/>
  {circles}
  <rect width="{w}" height="{h}" fill="#000000" opacity="0.15"/>
  <g transform="translate({icon_x},{icon_y})">
    <svg width="{icon_size}" height="{icon_size}" viewBox="0 0 200 200">
      <g fill="none" stroke="#C8A05A" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" opacity="0.95">{icon_inner}</g>
    </svg>
  </g>
</svg>'''
    with open(os.path.join(IMG_DIR, filename), "w") as f:
        f.write(svg)


# ---- Brand palette: gold / black / graphite (matches the real Sunshine logo) ----
BLACK = "#141210"
GRAPHITE = "#262220"
GRAPHITE_LT = "#3A342F"
GOLD = "#C8A05A"
GOLD_DK = "#9C7A2E"
GOLD_LT = "#E8C97A"
BRONZE = "#8A6A32"
OLIVE = "#5C5334"

# every banner stays within the gold/graphite family; the icon + a subtly
# different pair of dark tones is what tells each sport apart
heroes = [
    ("hero-run.svg", GRAPHITE_LT, BLACK, "running", 1),
    ("hero-bike.svg", GRAPHITE, BLACK, "bike", 2),
    ("hero-triathlon.svg", BRONZE, BLACK, "triathlon", 3),
    ("hero-walk.svg", GRAPHITE_LT, GRAPHITE, "walking", 4),
    ("hero-trail.svg", OLIVE, BLACK, "trail", 5),
    ("hero-kids.svg", GOLD_DK, BLACK, "kids", 6),
]
for fname, c1, c2, icon, seed in heroes:
    banner(fname, 1600, 560, c1, c2, icon, pattern_seed=seed, icon_size_ratio=0.5)

# ---- Event card thumbnails (640x420) ----
cards = [
    ("card-run.svg", GRAPHITE_LT, BLACK, "running", 11),
    ("card-bike.svg", GRAPHITE, BLACK, "bike", 12),
    ("card-triathlon.svg", BRONZE, BLACK, "triathlon", 13),
    ("card-walk.svg", GRAPHITE_LT, GRAPHITE, "walking", 14),
    ("card-trail.svg", OLIVE, BLACK, "trail", 15),
    ("card-kids.svg", GOLD_DK, BLACK, "kids", 16),
]
for fname, c1, c2, icon, seed in cards:
    banner(fname, 640, 420, c1, c2, icon, pattern_seed=seed, icon_size_ratio=0.48)

# ---- About page hero (1600x500) ----
banner("sobre-hero.svg", 1600, 500, GRAPHITE, BLACK, "triathlon", pattern_seed=21, icon_size_ratio=0.0)

print("banners done")
