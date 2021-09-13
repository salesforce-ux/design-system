// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { IsDependentOn } from '../../../shared/helpers';

import Score from '../../dynamic-icons/score';
import MediaObject from '../../../utilities/media-objects/index.react';
import Input from '../../input/';
import { FormElement } from '../../form-element';
import {
  TBodyTr,
  Td,
  RowTh,
  SelectRowCell,
  ReadOnlyCell,
  RowActionsCell,
  DataTableContext
} from '../';

/**
 * @name AdvancedDataTableTr - Table row for advanced data table components
 */
export const AdvancedDataTableTr = props => {
  const { isActionableMode } = useContext(DataTableContext);
  return (
    <TBodyTr isSelected={props.isSelected}>
      <Td isRightAligned type="advanced">
        <SelectRowCell
          checked={props.isSelected}
          hasSingleRowSelect={props.hasSingleRowSelect}
          index={props.index}
          inputTabIndex={isActionableMode ? '0' : '-1'}
        />
      </Td>
      <RowTh
        hasFocus={!isActionableMode && props.index === 1 && props.hasFocus}
        tabIndex={!isActionableMode && props.index === 1 ? '0' : null}
      >
        <ReadOnlyCell cellLink cellText={props.recordName} />
      </RowTh>
      <Td type="advanced">
        <ReadOnlyCell cellText={props.accountName} />
      </Td>
      <Td type="advanced">
        <ReadOnlyCell cellText={props.closeDate} />
      </Td>
      <Td type="advanced">
        <ReadOnlyCell cellText={props.stage} />
      </Td>
      <Td type="advanced">
        <ReadOnlyCell cellText={props.confidence} />
      </Td>
      {props.hasScores && props.amountScore && props.amountScoreLabel ? (
        <Td type="advanced">
          <div className="slds-grid slds-grid_vertical-align-center">
            <div className="slds-truncate" title={props.amount}>
              {props.amount}
            </div>
            <div className="slds-icon_container slds-m-left_x-small slds-m-right_xx-small">
              <Score data-slds-state={props.amountScore} />
            </div>
            <div className="slds-truncate" title={props.amountScoreLabel}>
              {props.amountScoreLabel}
            </div>
          </div>
        </Td>
      ) : (
        <Td type="advanced">
          <ReadOnlyCell cellText={props.amount} />
        </Td>
      )}
      <Td type="advanced">
        <ReadOnlyCell cellLink cellText={props.contact} />
      </Td>
      {props.hasRowActions && (
        <Td type="advanced">
          <RowActionsCell rowName={props.recordName} />
        </Td>
      )}
    </TBodyTr>
  );
};
AdvancedDataTableTr.displayName = 'AdvancedDataTableTr';
AdvancedDataTableTr.propTypes = {
  accountName: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  amountScore: IsDependentOn('amountScoreLabel', PropTypes.string),
  amountScoreLabel: IsDependentOn('amountScore', PropTypes.string),
  closeDate: PropTypes.string.isRequired,
  confidence: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  hasFocus: PropTypes.bool,
  hasRowActions: PropTypes.bool,
  hasScores: PropTypes.bool,
  index: PropTypes.number.isRequired,
  hasSingleRowSelect: PropTypes.bool,
  recordName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  stage: PropTypes.string.isRequired
};
AdvancedDataTableTr.defaultProps = {
  hasRowActions: true
};

/**
 * @name ProductImage - A common cell container for product image
 */
export const ProductImage = props => (
  <div className="slds-size_xx-small">
    <img
      alt={props.productName}
      src={props.productImgSrc}
      title={props.productName}
    />
  </div>
);
ProductImage.displayName = 'ProductImage';
ProductImage.propTypes = {
  productImgSrc: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired
};

/**
 * @name ProductPriceCell - A common cell container for product price
 */
export const ProductPriceCell = props => (
  <React.Fragment>
    <p>
      <s>{props.priceOriginal}</s>
    </p>
    <p>{props.priceDiscount}</p>
  </React.Fragment>
);
ProductPriceCell.displayName = 'ProductPriceCell';
ProductPriceCell.propTypes = {
  priceDiscount: PropTypes.string.isRequired,
  priceOriginal: PropTypes.string.isRequired
};

/**
 * @name ProductItemDetailsCell - A common cell container for product details
 */
export const ProductItemDetailsCell = props => (
  <MediaObject
    figureLeft={
      <ProductImage
        productImgSrc={props.productImgSrc}
        productName={props.productName}
      />
    }
  >
    <ReadOnlyCell cellLink cellText={props.productName} />
    <ul>
      {props.productProperties.map((property, i) => (
        <li
          className="slds-truncate"
          key={i}
          title={`${property.label}: ${property.value}`}
        >
          {property.label}: <strong>{property.value}</strong>
        </li>
      ))}
    </ul>
    <p className="slds-text-color_success">{props.labelInventory}</p>
  </MediaObject>
);
ProductItemDetailsCell.displayName = 'ProductItemDetailsCell';
ProductItemDetailsCell.propTypes = {
  labelInventory: PropTypes.string.isRequired,
  productImgSrc: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productProperties: PropTypes.array.isRequired
};

/**
 * @name ProductQuantityCell - A common cell container for product quantity field
 */
export const ProductQuantityCell = props => {
  const { isActionableMode } = useContext(DataTableContext);

  return (
    <FormElement
      inputId={props.inputId}
      labelClassName="slds-assistive-text"
      labelContent={props.labelText}
    >
      <Input
        className="slds-size_xxx-small slds-text-align_center slds-p-horizontal_x-small"
        defaultValue={props.quantity}
        id={props.inputId}
        placeholder=" "
        tabIndex={!isActionableMode ? '-1' : null}
      />
    </FormElement>
  );
};
ProductQuantityCell.displayName = 'ProductQuantityCell';
ProductQuantityCell.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  quantity: PropTypes.string
};

/**
 * @name ProductDataTableTr - Table row for advanced data table components
 */
export const ProductDataTableTr = props => (
  <TBodyTr isTopAligned>
    <RowTh>
      <ProductItemDetailsCell
        labelInventory={props.labelInventory}
        productImgSrc={props.productImgSrc}
        productName={props.productName}
        productProperties={props.productProperties}
      />
    </RowTh>
    <Td type="advanced">
      <ProductQuantityCell
        inputId={`product-quantity-text-input-id-${props.index}`}
        labelText={`${props.productName} quantity`}
        quantity={props.quantity}
      />
    </Td>
    <Td type="advanced">
      <ReadOnlyCell cellText={props.dateAdded} />
    </Td>
    <Td type="advanced">
      <ProductPriceCell
        priceDiscount={props.priceDiscount}
        priceOriginal={props.priceOriginal}
      />
    </Td>
    <Td type="advanced">
      <RowActionsCell rowName={props.productName} />
    </Td>
  </TBodyTr>
);
ProductDataTableTr.displayName = 'ProductDataTableTr';
ProductDataTableTr.propTypes = {
  dateAdded: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  labelInventory: PropTypes.string.isRequired,
  priceDiscount: PropTypes.string.isRequired,
  priceOriginal: PropTypes.string.isRequired,
  productImgSrc: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productProperties: PropTypes.array.isRequired,
  quantity: PropTypes.string
};
