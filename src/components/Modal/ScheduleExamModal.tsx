import { Modal, Text } from '@mantine/core';
import React, { useState } from 'react';
import { modalData } from './modalData';
import { theme } from '@/theme/theme';
import { cartData } from '../cart/cartData';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { DatePicker } from '@mantine/dates';
import TimezoneDropdown from './TimeZone';
import { ITimezoneOption } from 'react-timezone-select';

interface ScheduleExamModalProps {
  close: () => void;
  opened: boolean;
}

export const ScheduleExamModal: React.FC<ScheduleExamModalProps> = ({
  close,
  opened,
}) => {
  const [selectedTimezone, setSelectedTimezone] = useState<
    ITimezoneOption | string
  >(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const availableTimeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '2:00 PM',
    '3:00 PM',
  ];
  const handleTimezoneChange = (timezone: ITimezoneOption) => {
    setSelectedTimezone(timezone);
    console.log(`Selected timezone: `, timezone);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
  };
  const handleTimeSlotClick = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot);
  };
  return (
    <div>
      <Modal
        opened={opened}
        overlayProps={{
          blur: 3,
        }}
        radius="20px 0px 20px 0px"
        onClose={close}
        title={
          <>
            <Text
              sx={{
                fontSize: '18px',
                lineHeight: '21.47px',
                color: theme.colors.darkBlue,
              }}
              className="font-semibold"
            >
              {modalData.text}
            </Text>
          </>
        }
        centered
        size="600px"
      >
        <>
          <div className="flex ">
            <div
              className="max-w-[284px] w-full bg-white p-4 rounded-[20px] mx-auto "
              style={{
                border: '1px solid #1D2B391A',
                boxShadow: '0px 17px 46px -17px #0000001A',
              }}
            >
              <Text
                sx={{
                  fontSize: '10px',
                  lineHeight: '11.93px',
                  color: theme.colors.grey,
                }}
                className="font-semibold"
              >
                {modalData.date}
              </Text>
              <div className="calendar my-3">
                <DatePicker
                  // selected={selectedDate}
                  onChange={handleDateChange}
                  // dateFormat="MM/dd/yyyy"
                  sx={{
                    '[data-selected]': {
                      backgroundColor: theme.colors.golden, // Change the background color of the selected date
                      color: '#fff', // Change the text color of the selected date
                    },
                  }}
                />
              </div>
            </div>
            {selectedDate && (
              <div
                className="max-w-[200px] w-full  p-4 rounded-[20px] "
                style={{
                  border: '1px solid #1D2B391A',
                  boxShadow: '0px 17px 46px -17px #0000001A',
                }}
              >
                <div className="time-slots">
                  <Text
                    sx={{
                      fontSize: '10px',
                      lineHeight: '11.93px',
                      color: theme.colors.grey,
                    }}
                    className="font-semibold"
                  >
                    {modalData.time}
                  </Text>
                  <ul className="list-none p-0">
                    {availableTimeSlots.map((timeSlot, index) => (
                      <li
                        className="p-3 my-2 cursor-pointer"
                        style={{
                          border: '1px solid #A0A0A0',
                          borderRadius: '12px',
                          backgroundColor:
                            selectedTimeSlot === timeSlot
                              ? theme.colors.golden[0]
                              : '',
                          color: selectedTimeSlot === timeSlot ? '#fff' : '',
                        }}
                        key={index}
                        onClick={() => handleTimeSlotClick(timeSlot)}
                      >
                        {timeSlot}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div>
            <TimezoneDropdown
              value={selectedTimezone}
              onChange={handleTimezoneChange}
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex my-[2rem] justify-center items-center gap-2">
              {/* <Checkbox color="dark"  size="md" /> */}
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                style={{ border: '1px solid #E8E9EC' }}
                className="w-[23px] h-[23px]   rounded-[5px] focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 bg-white "
              />
              <div className="flex">
                <Text
                  sx={{
                    fontSize: '18px',
                    color: theme.colors.darkBlue,
                    lineHeight: '30.49px',
                  }}
                  className=" font-normal"
                >
                  {cartData.agree}
                </Text>

                <Text
                  sx={{
                    fontSize: '18px',
                    color: theme.colors.golden,
                    lineHeight: '30.49px',
                  }}
                  className="mx-2 font-medium  underline"
                >
                  {cartData.privacy}
                </Text>
              </div>
            </div>
            <ButtonPrimary
              sx={{
                borderRadius: '40px',
                backgroundColor: theme.colors.darkBlue,
                fontSize: '15px',
                lineHeight: '25.5px',
              }}
              className=" md:max-w-[150px] font-medium md:w-full max-w-[205px] w-full"
            >
              {modalData.confirm}
            </ButtonPrimary>
          </div>
        </>
      </Modal>
    </div>
  );
};
