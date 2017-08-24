import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';
import '@angular/upgrade';
import 'angular';

import * as downgrade from '@angular/upgrade/static';

import 'rxjs';

import * as angular from 'angular';

window['angular'] = angular;
window['ng2'] = {
  'downgradeComponent': downgrade.downgradeComponent
}