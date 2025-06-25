// QRCode import removed as we're using a static image

// Function for generating random URL removed as we're using a specific URL

// Use the midi-hebdo-logo.png image instead of creating a stylized logo
function createLogo(): void {
  const logoContainer = document.getElementById('logo-container');
  if (!logoContainer) return;

  // Create an image element
  const img = document.createElement('img');
  img.src = 'https://scontent.fctt1-1.fna.fbcdn.net/v/t39.30808-6/466043621_122094091640643306_1708798197666363630_n.png?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=0pmKoDMOTjgQ7kNvwHh9aT8&_nc_oc=AdkG9oy988H8DqEOG1AGkC1X8q1x3sJc1vnaI2Q4dpxmRD3SMDTaiZMbjd2Qir_gbBU&_nc_zt=23&_nc_ht=scontent.fctt1-1.fna&_nc_gid=W3-34TSCqjytb_cwD7LmEw&oh=00_AfObDsuugJbr-TUWMebOVVNmqydwT2cdXfdVaNxzj_jSgw&oe=6861BF1F'; // Use the direct image URL
  img.alt = 'Midi Hebdo Logo';
  img.className = 'logo-image';

  // Clear existing content and add the image
  logoContainer.innerHTML = '';
  logoContainer.appendChild(img);

  // Add custom styling for the logo
  const style = document.createElement('style');
  style.textContent = `
    .logo-image {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    #logo-container {
      background-color: transparent !important;
      border: none !important;
      box-shadow: none !important;
      width: 400px !important; /* Updated to match CSS */
      height: auto !important;
    }
  `;
  document.head.appendChild(style);
}

// Use static QR code image instead of generating one
function addStaticQRCode(): void {
  const qrcodeContainer = document.getElementById('qrcode-container');
  if (!qrcodeContainer) return;

  // Use the specific Facebook URL provided
  const facebookURL = 'https://www.facebook.com/profile.php?id=61569299182836';

  // Update the Facebook link text
  const facebookLinkElement = document.querySelector('.facebook-link');
  if (facebookLinkElement) {
    facebookLinkElement.textContent = 'facebook.com/midihebdo';
  }

  // Create image element for the static QR code
  const qrImage = document.createElement('img');
  qrImage.src = 'https://i.ibb.co/qFCTqyzF/facebook-qr-code-3.png'; // The provided QR code image URL
  qrImage.alt = 'Facebook QR Code';
  qrImage.style.width = '100%';
  qrImage.style.height = '100%';

  // Clear container and add the image
  qrcodeContainer.innerHTML = '';
  qrcodeContainer.appendChild(qrImage);

  console.log('Static QR code added for:', facebookURL);
}

// Add animations to the search bar
function addSearchAnimation(): void {
  const searchBar = document.querySelector('.search-bar');
  if (!searchBar) return;

  // Enhance the search bar design
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0% { transform: scale(1); box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); }
      50% { transform: scale(1.05); box-shadow: 0 4px 8px rgba(59, 89, 152, 0.3); }
      100% { transform: scale(1); box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); }
    }

    .search-bar {
      animation: pulse 2s infinite ease-in-out;
      background: linear-gradient(to right, #f0f2f5, #ffffff, #f0f2f5);
      border: 2px solid #3b5998;
      padding: 8px 15px;
      width: 180px;
      margin-top: 12px;
    }

    .search-icon svg {
      fill: none;
      stroke: #3b5998;
      width: 45px;
      height: 45px;
    }

    .search-text {
      font-weight: bold;
      color: #3b5998;
      position: relative;
      z-index: 2;
      font-size: 16px;
      letter-spacing: 0.5px;
    }

    .search-text::before {
      content: '';
      display: inline-block;
      width: 12px;
      height: 12px;
      background-color: #3b5998;
      border-radius: 50%;
      margin-right: 8px;
      vertical-align: middle;
    }

    .method-title {
      font-size: 18px;
      margin-bottom: 5px;
      color: #3b5998;
      font-weight: bold;
    }

    .method-description {
      font-size: 15px;
      color: #4a4a4a;
      margin-bottom: 12px;
      letter-spacing: 0.3px;
    }
  `;
  document.head.appendChild(style);
}

// Add a watermark text
function addWatermark(): void {
  const flyer = document.querySelector('.flyer');
  if (!flyer) return;

  const watermark = document.createElement('div');
  watermark.className = 'watermark';
  watermark.textContent = `MIDI HEBDO • Print Edition • ${new Date().toLocaleDateString('fr-FR')}`;

  flyer.appendChild(watermark);

  // Add watermark styles
  const style = document.createElement('style');
  style.textContent = `
    .watermark {
      position: absolute;
      bottom: 5mm;
      right: 5mm;
      font-size: 8px;
      color: #999;
      transform: rotate(-90deg);
      transform-origin: bottom right;
      letter-spacing: 1px;
    }
  `;
  document.head.appendChild(style);
}

// Initialize the flyer
function initFlyer(): void {
  createLogo();
  addStaticQRCode(); // Using static QR code instead of generating one
  addSearchAnimation();
  addWatermark();

  // Add a loading animation until resources are loaded
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });
}

// Run when the DOM is loaded
document.addEventListener('DOMContentLoaded', initFlyer);
