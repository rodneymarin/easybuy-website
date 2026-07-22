import es from './es.json'
import en from './en.json'

const STORAGE_KEY = 'eb-lang'
const translations = { es, en }
const FALLBACK = 'en'

let currentLang = detectLang()

function t(key) {
  return translations[currentLang]?.[key]
}

function safeGet(key) {
  try { return localStorage.getItem(key) } catch { return null }
}

function safeSet(key, val) {
  try { localStorage.setItem(key, val) } catch { /* noop */ }
}

export function getCurrentLang() {
  return currentLang
}

function detectLang() {
  const stored = safeGet(STORAGE_KEY)
  if (stored && translations[stored]) return stored

  const browser = (navigator.language || '').split('-')[0]
  if (translations[browser]) return browser

  return FALLBACK
}

export function setLang(lang) {
  if (!translations[lang]) return
  currentLang = lang
  safeSet(STORAGE_KEY, lang)
  applyTranslations()
  updateMeta()
  updateLangBtns()
}

export function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n')
    const text = t(key)
    if (text !== null && text !== undefined) el.textContent = text
  })
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt')
    const text = t(key)
    if (text !== null && text !== undefined) el.setAttribute('alt', text)
  })
  document.documentElement.lang = currentLang === 'es' ? 'es' : 'en'
}

function updateMeta() {
  const ogLocale = document.querySelector('meta[property="og:locale"]')
  if (ogLocale) ogLocale.setAttribute('content', t('meta.og.locale') || 'es_ES')

  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', t('meta.og.title') || 'EasyBuy — Tu lista de compras inteligente')

  const ogDesc = document.querySelector('meta[property="og:description"]')
  if (ogDesc) ogDesc.setAttribute('content', t('meta.og.description') || '')

  const description = document.querySelector('meta[name="description"]')
  if (description) description.setAttribute('content', t('meta.description') || '')

  const title = document.querySelector('title')
  if (title) title.textContent = t('meta.title') || 'EasyBuy'
}

function updateLangBtns() {
  document.querySelectorAll('.eb-lang-btn').forEach(btn => {
    const isActive = btn.getAttribute('data-lang') === currentLang
    btn.classList.toggle('text-white', isActive)
    btn.classList.toggle('font-semibold', isActive)
    btn.classList.toggle('text-gray-400', !isActive)
    btn.classList.toggle('font-normal', !isActive)
  })
}

export function init() {
  applyTranslations()
  updateMeta()
  updateLangBtns()

  document.documentElement.classList.add('i18n-ready')

  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(btn.getAttribute('data-lang'))
    })
  })
}
