const html = require('choo/html');
const assets = require('../../common/assets');

module.exports = function intro(state) {
  return html`
  <article class="flex flex-col items-center justify-between bg-white border border-grey-light md:border-none px-6 md:py-10 py-6 md:mb-0 mb-6">
    <p class="text-center">
      <div class="font-semibold leading-normal">${state.translate(
        'uploadPageHeader'
      )}</div>
      <div class="italic text-sm opacity-75 leading-normal">${state.translate(
        'pageHeaderCredits'
      )}</div>
    </p>
    <img class="my-6" src="${assets.get('illustration_download.svg')}"/>
    <p class="md:mx-6 max-w-sm text-sm opacity-50 leading-normal">${state.translate(
      'uploadPageExplainer'
    )}</p>
  </article>`;
};