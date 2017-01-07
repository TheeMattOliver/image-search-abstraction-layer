'use strict';

angular.module('imgurApp.version', [
  'imgurApp.version.interpolate-filter',
  'imgurApp.version.version-directive'
])

.value('version', '0.1');
