import React, { Component } from 'react';

import VerticalStackLayoutManual from './layouts/VerticalStackLayoutManual';
import VerticalStackLayoutFlex from './layouts/VerticalStackLayoutFlex';
/* 
//comment out on use
import VerticalStackLayoutHeaderContentFooter from './layouts/VerticalStackLayoutHeaderContentFooter';
import HorizontalStackLayout from './layouts/HorizontalStackLayout';
import JustifyContent from './layouts/JustifyContent';
import AlignItems from './layouts/AlignItems';
import AlignItemsStretch from './layouts/AlignItemsStretch';
import GridLayout from './layouts/GridLayout';
import GridLayoutWithSpaceBetween from './layouts/GridLayoutWithSpaceBetween';
import Positioning from './layouts/Positioning';
import FixedHeaderFooter from './layouts/FixedHeaderFooter';
import FlexboxGridLibrary from './layouts/FlexboxGridLibrary';
*/

export class App extends Component {
  render() {
    return (
        <VerticalStackLayoutFlex />
    );
  }
}