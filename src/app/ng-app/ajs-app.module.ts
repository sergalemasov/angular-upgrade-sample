
import { HeroDetailComponent } from './components/hero-detail.component';
import { downgradeComponent } from '@angular/upgrade/static';

import * as angular from 'angular';

angular.module('newHeroApp', [])
  .directive(
    'heroDetail',
    downgradeComponent({ component: HeroDetailComponent }) as angular.IDirectiveFactory
  );
