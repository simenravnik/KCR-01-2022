import { DatePicker, Space } from 'antd';
import React from 'react';
const { RangePicker } = DatePicker;

export default function BasicDatePicker() {

    const onChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
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
                    format="YYYY-MM-DD HH:mm"
                    onChange={onChange}
                    onOk={onOk}
                    style={{ color: 'black' }}
                />
            </div>
        </div>
    );
}