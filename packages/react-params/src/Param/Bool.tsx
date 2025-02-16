// Copyright 2017-2025 @polkadot/react-params authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Props } from '../types.js';

import React, { useCallback, useRef, useState } from 'react';

import { Dropdown } from '@polkadot/react-components';
import { isBoolean } from '@polkadot/util';

import { useTranslation } from '../translate.js';
import Bare from './Bare.js';

function BoolParam ({ className = '', defaultValue: { value }, isDisabled, isError, label, onChange, withLabel }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const [defaultValue] = useState(
    value instanceof Boolean
      ? value.valueOf()
      : isBoolean(value)
        ? value
        : false
  );

  const options = useRef([
    { text: t('No'), value: false },
    { text: t('Yes'), value: true }
  ]);

  const _onChange = useCallback(
    (value: boolean) =>
      onChange && onChange({
        isValid: true,
        value
      }),
    [onChange]
  );

  return (
    <Bare className={className}>
      <Dropdown
        className='full'
        defaultValue={defaultValue}
        isDisabled={isDisabled}
        isError={isError}
        label={label}
        onChange={_onChange}
        options={options.current}
        withEllipsis
        withLabel={withLabel}
      />
    </Bare>
  );
}

export default React.memo(BoolParam);
