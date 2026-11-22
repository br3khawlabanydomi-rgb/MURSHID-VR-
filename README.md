# Beyond Bullying — AI-Powered VR

International Community Schools • Khalifa City — Branch 3  
Designed by Khawla Banydomi, AI Instructor • Academic Year 2026–2027

## Publish with GitHub Pages

1. Unzip the downloaded ZIP. Extract all files and the audio folder, including the local engine, campus scripts, stylesheet and guides.
2. Create a public repository named `beyond-bullying-vr` in your GitHub account.
3. Upload the extracted files to the repository root (not the ZIP and not an enclosing folder). Commit changes.
4. In repository **Settings → Pages**, choose deployment from a branch, select `main` and `/ (root)`, and save.
5. Wait for GitHub Pages to report the published URL. Open it in a private browser window and confirm it works without an account. The address generally follows `https://YOUR-USERNAME.github.io/beyond-bullying-vr/`.
6. Put that verified address in Google Classroom or generate a QR code using a trusted school-approved QR tool. No live URL or QR is included because this package has not been deployed.

## Student navigation

- Select English or Arabic, a grade band and a fictional perspective. Select Listen to Murshid to hear spoken guidance. The introductory and mission narration is included in both languages; the extra read-aloud option depends on device voices.
- Complete the optional before assessment, guided tour or free exploration. Each world has a scenario, decision, supportive explanation and a badge awarded for the safe choice.
- Desktop: WASD or arrows, click-drag to look around, E to open the mission, M for map, Escape to pause. Click characters, room entrance signs or turquoise teleport tiles; freely walk between rooms along the central corridor.
- Touch: use the directional pad and swipe to look around. Close the mission panel to move freely.
- Compatible WebXR headsets: use the browser's Enter VR button, point the controllers at floating buttons, and select teleport tiles. VR answers use English in-world labels; Arabic text and narration are available in the ordinary browser interface. Exit headset mode for the assessment summary and certificate.
- The red **Safe exit** button returns to a calm space. Skipping never removes earned stars or points; you may revisit when ready.
- Complete all eight missions to unlock an A4-ratio PNG certificate. A chosen display name is drawn locally, not transmitted. Complete the after assessment for a private before/after comparison and download an anonymous CSV if desired.

## Teacher and parent guide

Before use, review all fictional scenarios and verify the school's actual reporting pathways. Offer a non-VR alternative and do not require a learner to recount a personal experience. For young learners, adults should guide the session. Suggested lesson: 5 minutes introduction and before quiz, 15–25 minutes of selected worlds, 5 minutes practice asking for help, 5 minutes debrief/after quiz. Completing all worlds may take more than one session.

Discuss repeated harm, power imbalance, and how bullying differs from ordinary disagreement. Students can always seek help about a one-time harmful incident too. Reinforce that bullying is not the affected student's fault. Encourage private reporting and safe support; do not ask students to confront dangerous situations. If a child discloses real bullying, listen calmly and follow your school's safeguarding procedure; the virtual guide is not a reporting or counselling service. Do not interpret quiz scores as wellbeing diagnoses or proof of prevention effectiveness.

For families, complete a scenario together and ask: What was safest? Which trusted adult could help? How could we include others? Use regular browser mode if the learner is uncomfortable in VR. Never force continued participation. No personal disclosure is necessary.

## Technical notes

All content, geometry, feedback and assessment logic are implemented in static HTML/CSS/JavaScript. A-Frame 1.6.0 is included in the archive; the missions remain usable if the engine does not load. Murshid is a clearly labelled rule-based virtual guide, not a live language model. No AI API key or external account is needed. Learning progress is kept in browser local storage. Your hosting service may receive ordinary web request metadata. No student-name collection or telemetry is built into the app. The certificate has school text branding, not an official logo asset.

WebXR requires HTTPS and a compatible browser/headset. Test on school devices and in any headset before using with students. The desktop/touch interface is the recommended accessible alternative. The 3D environment is a stylized educational reconstruction, not photorealistic. Use browser zoom and text-to-speech as needed.
