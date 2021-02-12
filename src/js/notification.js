import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';

import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/mobile/dist/PNotifyMobile.css';

// import '@pnotify/core/dist/BrightTheme.css';

import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/Material.css';

// import { alert, notice, info, success, error } from '@pnotify/core';
// const { notice, info, success, error } = require('@pnotify/core');

defaultModules.set(PNotifyMobile, {});

// Set default styling.
defaults.styling = 'material';

// This icon setting requires the Material Icons font. (See below.)
defaults.icons = 'material';

// // Manually set the type.
// const myAlert = alert({
//   text: "I'm an alert.",
//   type: 'info',
// });

// // Automatically set the type.
// const myNotice = notice({
//   text: "I'm a notice.",
// });

// const myInfo = info({
//   text: "I'm an info message.",
// });

// const mySuccess = success({
//   text: 'Success message. You find country!',
// });

// const myError = error({
//   text:
//     'Error message! Too many matches found. Please enter a more specific query!',
// });
