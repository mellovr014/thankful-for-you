# A little Thanksgiving for Sophia 🍁

A handmade, mobile-friendly surprise for Sophia and our first Thanksgiving together: five flip cards, a playful love question, an animated secret letter, and a heart-and-leaf finale. Built with plain HTML, CSS, and JavaScript; no packages or build step required.

## See the website on your own computer

1. On GitHub, click the green **Code** button, then **Download ZIP**.
2. Unzip the downloaded folder.
3. Double-click `index.html`. It opens in your web browser. No installation is needed.

## Make it your own

Open `index.html` in a text editor to change the love letter and card messages. The five answers to the love question are in `script.js`. Save the file, then refresh your browser. `styles.css` controls the appearance, and `script.js` controls the buttons.

## Share a website link using GitHub Pages

After these files have been uploaded to the repository's `main` branch:

1. Open the repository on GitHub.
2. Click **Settings**, then **Pages** in the left menu.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select **main** and **/ (root)**, then click **Save**.
5. Wait a few minutes. Return to **Pages** and open the website link GitHub shows.
6. Send that link to Sophia!

GitHub Pages availability depends on your account and repository visibility. Sophia does not need an account. The site asks search engines not to index it through a robots meta tag and `robots.txt`, but this is not password protection: anyone with the link can view it. Avoid posting the link publicly if you want to keep the surprise low-profile.

## Cloud development

From `/workspace/idk`, run:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

The cloud onboarding environment supports internal validation, rather than a shareable live preview. Use GitHub Pages for a link to send to Sophia.

No packages, credentials, database, or build step are needed. The handwritten font is bundled locally in `assets/`, with its open-source license. No external services or tracking are used.
