Package.describe({
  name: 'bioduds:uikit3',
  version: '1.1.0',
  // Brief, one-line summary of the package.
  summary: 'UIKit Version 3.0.0 beta 5 release',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/bioduds/meteor-uikit3.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('jquery', ['client']);
  api.addFiles([
    'js/uikit.min.js',
    'css/uikit.min.css',
  ],['client']);
  api.addAssets([
    'images/accordion-close.svg',
    'images/close-large.svg',
    'images/divider-icon.svg',
    'images/form-checkbox.svg',
    'images/form-select.svg',
    'images/list-bullet.svg',
    'images/nav-parent-close.svg',
    'images/overlay.svg',
    'images/pagination-previous.svg',
    'images/search-large.svg',
    'images/slidenav-large-next.svg',
    'images/slidenav-next.svg',
    'images/spinner.svg',
    'images/accordion-open.svg',
    'images/close.svg',
    'images/form-checkbox-indeterminate.svg',
    'images/form-radio.svg',
    'images/icons.svg',
    'images/navbar-toggle.svg',
    'images/nav-parent-open.svg',
    'images/pagination-next.svg',
    'images/search-default.svg',
    'images/search-navbar.svg',
    'images/slidenav-large-previous.svg',
    'images/slidenav-previous.svg',
    'images/totop.svg',
  ], ['client']);
});

