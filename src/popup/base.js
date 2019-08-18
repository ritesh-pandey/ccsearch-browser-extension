export const elements = {
  inputField: document.getElementById('section-search-input'),
  searchIcon: document.getElementById('search-icon'),
  filterIcon: document.getElementById('filter-icon'),
  errorMessage: document.getElementById('error-message'),
  spinnerPlaceholderGrid: document.getElementById('spinner-placeholder--grid'),
  spinnerPlaceholderPopup: document.getElementById('spinner-placeholder--popup'),
  spinnerPlaceholderBookmarks: document.getElementById('spinner-placeholder--bookmarks'),
  useCaseChooser: document.querySelector('#choose-usecase'),
  licenseChooser: document.querySelector('#choose-license'),
  providerChooser: document.querySelector('#choose-provider'),
  licenseChooserWrapper: document.querySelector('.section-filter__filter-wrapper--choose-license'),
  useCaseChooserWrapper: document.querySelector('.section-filter__filter-wrapper--choose-usecase'),
  providerChooserWrapper: document.querySelector(
    '.section-filter__filter-wrapper--choose-provider',
  ),
  providerChooserLoadingMessage: document.querySelector('.section-filter__provider-loading-mes'),
  filterResetButton: document.querySelector('.section-filter--reset-button'),
  filterApplyButton: document.querySelector('.section-filter--apply-button'),
  noMoreImagesMessage: document.querySelector('.no-more-images-mes'),
  popup: document.getElementById('popup'),
  popupMain: document.querySelector('.popup__main'),
  downloadImageButton: document.getElementById('download-image'),
  downloadImageAttributionButton: document.getElementById('download-image-attribution'),
  popupCloseButton: document.querySelector('.popup__close-button'),
  gridPrimary: document.querySelector('.grid-primary'),
  gridBookmarks: document.querySelector('.grid-bookmarks'),
  filterSection: document.querySelector('.section-filter'),
  popupTabLinks: document.getElementsByClassName('popup__tab-links'),
  popupTabContent: document.getElementsByClassName('popup__tab-content'),
  facebookShareButton: document.querySelector('.fa-facebook'),
  twitterShareButton: document.querySelector('.fa-twitter'),
  pinterestShareButton: document.querySelector('.fa-pinterest'),
  showBookmarksIcon: document.getElementById('show_bookmarks-icon'),
  homeIcon: document.getElementById('home-icon'),
  primarySection: document.querySelector('.section-primary'),
  bookmarksSection: document.querySelector('.section-bookmarks'),
  deleteAllBookmarksButton: document.querySelector('.delete-all-button'),
};

export const attributionTabLink = elements.popupTabLinks[0];