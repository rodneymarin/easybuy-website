import './style.css'
import heroHtml from './sections/hero.html?raw'
import featureHtml from './sections/feature.html?raw'
import featuresHtml from './sections/features.html?raw'
import ctaHtml from './sections/cta.html?raw'
import footerHtml from './sections/footer.html?raw'
import { init as initI18n } from './i18n/index.js'

document.querySelector('#app').innerHTML = [heroHtml, featureHtml, featuresHtml, ctaHtml, footerHtml].join('')

initI18n()
