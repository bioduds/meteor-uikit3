Package.describe({
  name: 'bioduds:uikit3',
  version: '1.1.4',
  // Brief, one-line summary of the package.
  summary: 'UIKit Version 3.0.0 beta 10 release',
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
    'css/uikit.rtl.min.css',
  ],['client']);
  api.addAssets([
    'images/icons.svg'
  ], ['client']);
});

