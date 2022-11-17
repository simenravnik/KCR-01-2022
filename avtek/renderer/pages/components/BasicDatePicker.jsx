import { DatePicker, Space } from 'antd';
import React from 'react';
const { RangePicker } = DatePicker;

export default function BasicDatePicker(props) {

    const onChange = (value, dateString) => {

        console.log("Here", dateString[0]);

        let durationDays = Math.round(value[1].diff(value[0], 'hours') / 24) + 1;

        props.setCarPickupInfo({ ...props.carPickupInfo, rent_duration: durationDays, pickup_time: value[0].format(), return_time: value[1].format(), moment_time: value });

        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);

        console.log(props.carPickupInfo);
    };

    const onOk = (value) => {
        console.log('onOk: ', value);
    };


    return (
        <div>
            <div>
                <RangePicker
                    className="bg-gray-50 h-12 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                    showTime={{
                        format: 'HH:mm',
                    }}
                    placeholder={["Prevzem", "Vračilo"]}
                    value={props.carPickupInfo["moment_time"]}
                    format="DD/MM/YYYY HH:mm"
                    onChange={onChange}
                    onOk={onOk}
                    style={{ color: 'black' }}
                />
            </div>
        </div>
    );
}