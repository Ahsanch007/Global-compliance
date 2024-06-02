import React, { useState } from 'react';
import TimeZoneSelect, { Props } from 'react-timezone-select';

interface TimezoneDropdownProps {
  onChange: (timezone: string) => void;
}

const TimezoneDropdown: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>Time Zone</h2>
      <TimeZoneSelect {...props} />
    </div>
  );
};

export default TimezoneDropdown;
