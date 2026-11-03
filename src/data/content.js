/**
 * Frame & Motion - Gupta Suraj (Suryaaa) Portfolio Content
 * Single source of truth for all copy, photos, reels, skills, and credits.
 */

export const personalInfo = {
  name: "Gupta Suraj",
  preferredName: "Suryaaa",
  tagline: "FRAME & MOTION",
  roles: [
    "Photographer",
    "Videographer",
    "Video Editor",
    "Content Creator"
  ],
  bio: "Creative photographer, videographer and video editor with practical experience in Instagram Reels, short-form videos, event coverage and promotional content. Focused on visual rhythm, purposeful framing, and social-first content that stops the scroll.",
  careerObjective: "To contribute to a creative media team as a Photographer, Videographer & Video Editor, producing engaging visual content while growing through hands-on production experience.",
  education: {
    degree: "B.E. Environmental Engineering (2nd Year)",
    institution: "Dr. S. & S.S. Ghandhy Government Engineering College, Surat",
    status: "Currently Pursuing"
  },
  contact: {
    email: "surajgupta3350@gmail.com",
    instagram: "@surya__edits.05",
    instagramUrl: "https://www.instagram.com/surya__edits.05/",
    location: "Surat, Gujarat, India"
  },
  credits: {
    heroPortrait: "/photos/photo-portrait.webp",
    gimbalAction: "/photos/photo-gimbal.webp",
    counterCandid: "/photos/photo-counter.webp",
    universalCredit: "Photo / Video: Gupta Suraj",
    footerCredit: "Designed and shot by Gupta Suraj. © 2026",
    gearAndTools: "Gear & Tools: Adobe Premiere Pro · CapCut"
  }
};

export const photos = [
  {
    id: 1,
    title: "Gimbal Rig at Pavilion",
    caption: "Monitoring framing on the handheld stabilizer beneath outdoor textile awnings.",
    category: "Events",
    alt: "Suraj seated on a carved lavender bench holding a smartphone on a motorized gimbal stabilizer under blue patterned fabric canopies.",
    src: "/photos/photo-gimbal.webp",
    thumb: "/photos/thumbs/photo-gimbal.webp",
    aspect: "4:5",
    credit: "Photo / Video: Gupta Suraj",
    exif: null,
    highlight: true
  },
  {
    id: 2,
    title: "Courtyard Warmth",
    caption: "Direct portrait seated at high-top patio tables beneath night foliage and soft overhead lanterns.",
    category: "Portraits",
    alt: "Portrait of Suraj smiling at the camera, seated on a tall stool in an outdoor cafe courtyard with green vines and warm lighting.",
    src: "/photos/photo-portrait.webp",
    thumb: "/photos/thumbs/photo-portrait.webp",
    aspect: "4:5",
    credit: "Photo / Video: Gupta Suraj",
    exif: null,
    isHero: true
  },
  {
    id: 3,
    title: "Counter Candid",
    caption: "Seated at the tiled counter beneath suspended glassware in low interior light.",
    category: "Portraits",
    alt: "Suraj in a black polo shirt seated at a dark blue tiled bar counter with hanging stemware overhead.",
    src: "/photos/photo-counter.webp",
    thumb: "/photos/thumbs/photo-counter.webp",
    aspect: "9:16",
    credit: "Photo / Video: Gupta Suraj",
    exif: null
  }
];

export const photoCategories = ["All", "Portraits", "Events"];

export const reels = [
  {
    id: 1,
    reelNumber: "01",
    title: "Rhythm in Motion",
    description: "Dynamic pacing, audio-sync and editorial cut.",
    url: "https://www.instagram.com/reel/DVRJOQ_Al2CuELdBR20xMVBhjU274OFymJIuEE0/",
    thumb: "/thumbs/reel1.webp",
    fallbackThumb: "/thumbs/reel1.jpg",
    timecode: "00:00:18:24",
    fps: "30 FPS",
    tags: ["Pacing", "Reels", "Visual Flow"],
    credit: "Photo / Video: Gupta Suraj"
  },
  {
    id: 2,
    reelNumber: "02",
    title: "Surat Urban Pulse",
    description: "Street aesthetics, ambient motion and atmospheric color timing.",
    url: "https://www.instagram.com/reel/DTpo31rkZlJ/",
    thumb: "/thumbs/reel2.webp",
    fallbackThumb: "/thumbs/reel2.jpg",
    timecode: "00:00:24:12",
    fps: "30 FPS",
    tags: ["Street", "Atmospheric", "Grading"],
    credit: "Photo / Video: Gupta Suraj"
  },
  {
    id: 3,
    reelNumber: "03",
    title: "Night Drive Vignette",
    description: "Low-light tone curves and ambient environmental storytelling.",
    url: "https://www.instagram.com/reel/DfFFk9eoRkY/",
    thumb: "/thumbs/reel3.webp",
    fallbackThumb: "/thumbs/reel3.jpg",
    timecode: "00:00:32:05",
    fps: "24 FPS",
    tags: ["Low Light", "Mood", "Short Form"],
    credit: "Photo / Video: Gupta Suraj"
  },
  {
    id: 4,
    reelNumber: "04",
    title: "Frame Cadence",
    description: "Micro-cuts, speed transitions and hook-driven rhythm.",
    url: "https://www.instagram.com/reel/DcppBJko-lD/",
    thumb: "/thumbs/reel4.webp",
    fallbackThumb: "/thumbs/reel4.jpg",
    timecode: "00:00:15:19",
    fps: "60 FPS",
    tags: ["Speed Ramp", "Hook", "Cuts"],
    credit: "Photo / Video: Gupta Suraj"
  },
  {
    id: 5,
    reelNumber: "05",
    title: "Golden Hour Cut",
    description: "Warm color grade, handheld camera framing and texture.",
    url: "https://www.instagram.com/reel/DYq1_svo_YC/",
    thumb: "/thumbs/reel5.webp",
    fallbackThumb: "/thumbs/reel5.jpg",
    timecode: "00:00:29:08",
    fps: "24 FPS",
    tags: ["Golden Hour", "Color Grade", "Handheld"],
    credit: "Photo / Video: Gupta Suraj"
  }
];

export const timelineTracks = [
  {
    trackId: "V2",
    name: "Video 2 / Visuals",
    type: "video",
    color: "#E5383B",
    clips: [
      { id: "c1", title: "Event Videography", start: "00:00", duration: "01:15", width: "28%", desc: "Live stage, weddings, festivals & gatherings" },
      { id: "c2", title: "Handheld Gimbal Rigging", start: "01:20", duration: "01:10", width: "26%", desc: "Smooth 3-axis tracking shots & fluid motion" },
      { id: "c3", title: "Short-Form Social Hooks", start: "02:35", duration: "01:30", width: "36%", desc: "First-3-seconds retention design for Reels" }
    ]
  },
  {
    trackId: "V1",
    name: "Video 1 / Stills & Framing",
    type: "video",
    color: "#F4A261",
    clips: [
      { id: "c4", title: "Portrait Photography", start: "00:00", duration: "01:40", width: "38%", desc: "Direct natural light & environmental framing" },
      { id: "c5", title: "Street & Night Moods", start: "01:45", duration: "01:10", width: "28%", desc: "High-contrast shadows & urban geometry" },
      { id: "c6", title: "Composition & Depth", start: "03:00", duration: "01:15", width: "28%", desc: "Foreground masking & leading lines" }
    ]
  },
  {
    trackId: "A1",
    name: "Audio 1 / Premiere Pro Suite",
    type: "audio",
    color: "#3B82F6",
    clips: [
      { id: "c7", title: "Adobe Premiere Pro", start: "00:00", duration: "02:10", width: "48%", desc: "Multi-track cutting, color timing & transitions" },
      { id: "c8", title: "Beat-Sync Audio Cut", start: "02:15", duration: "01:45", width: "42%", desc: "Precision audio cuts on transients & beat drops" }
    ]
  },
  {
    trackId: "A2",
    name: "Audio 2 / Mobile & Analytics",
    type: "audio",
    color: "#10B981",
    clips: [
      { id: "c9", title: "CapCut Production", start: "00:00", duration: "01:50", width: "40%", desc: "Rapid mobile edits, trending sounds, speed ramps" },
      { id: "c10", title: "Audience & Data Analysis", start: "02:00", duration: "01:50", width: "48%", desc: "Watch-time curves, hook retention & reach metrics" }
    ]
  }
];

export const creativeWorkStories = [
  {
    id: "story-1",
    title: "Event Terrace Gimbal Coverage",
    badge: "FIELD PRODUCTION",
    subtitle: "High-mobility handheld rig for fast outdoor pacing",
    description: "Capturing candid interactions and wide spatial geometry at open-air pavilion events. Operating on a 3-axis stabilizer with real-time framing feedback.",
    image: "/photos/photo-gimbal.webp",
    aspect: "4:5",
    tags: ["Stabilization", "3-Axis Gimbal", "Event Coverage", "Live Action"],
    metric: "100% Handheld Fluidity"
  },
  {
    id: "story-2",
    title: "Portrait Mood & Ambient Foliage",
    badge: "ENVIRONMENTAL PORTRAITURE",
    subtitle: "Night patio lighting and authentic expressions",
    description: "Balancing natural night ambiance with warm directional lighting. Focusing on genuine human connection rather than stiff posed studio setups.",
    image: "/photos/photo-portrait.webp",
    aspect: "4:5",
    tags: ["Ambient Light", "Natural Contrast", "Subject Connection"],
    metric: "Warm Tonal Curve"
  }
];

