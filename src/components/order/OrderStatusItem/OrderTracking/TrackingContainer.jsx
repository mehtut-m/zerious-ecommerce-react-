import { useState, useEffect } from 'react';
import { getTrackingStatus } from '../../../../api/order';
import axios from '../../../../config/axios';
import LoadingScreen from './LoadingScreen';
import TrackingItem from './TrackingItem';

const post = {
  response: {
    items: {
      RH156090565TH: [
        {
          barcode: 'RH156090565TH',
          status: '103',
          status_description: 'รับฝาก',
          status_date: '02/11/2564 13:28:14+07:00',
          location: 'บางกอกใหญ่',
          postcode: '10605',
          delivery_status: null,
          delivery_description: null,
          delivery_datetime: null,
          receiver_name: null,
          signature: null,
        },
        {
          barcode: 'RH156090565TH',
          status: '301',
          status_description: 'อยู่ระหว่างการนำจ่าย',
          status_date: '04/11/2564 09:10:33+07:00',
          location: 'ตลิ่งชัน',
          postcode: '10170',
          delivery_status: null,
          delivery_description: null,
          delivery_datetime: null,
          receiver_name: null,
          signature: null,
        },
        {
          barcode: 'RH156090565TH',
          status: '501',
          status_description: 'นำจ่ายสำเร็จ',
          status_date: '04/11/2564 10:43:51+07:00',
          location: 'ตลิ่งชัน',
          postcode: '10170',
          delivery_status: 'S',
          delivery_description: 'ผู้รับได้รับสิ่งของเรียบร้อยแล้ว',
          delivery_datetime: '04/11/2564 10:43:51+07:00',
          receiver_name: 'เมธัส28/10/ผู้รับรับเอง',
          signature:
            'https://trackimage.thailandpost.co.th/f/signature/QDkwNTY1YjVzMGx1VDMz/QGI1c1JIMGx1VDMx/QGI1czBsVEh1VDM0/QGI1czBsdTE1NjBUMzI=',
        },
      ],
    },
    track_count: {
      track_date: '01/02/2565',
      count_number: 1,
      track_count_limit: 1000,
    },
  },
  message: 'successful',
  status: true,
};

const TrackingContainer = ({ trackingNo }) => {
  const [trackingStatus, setTrackingStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  // trackingNo = 'RH156090565TH';

  console.log(trackingStatus);
  useEffect(() => {
    if (trackingNo) {
      getTrackingStatus(trackingNo)
        .then((res) => {
          setTrackingStatus(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [trackingNo]);

  return (
    <>
      <div className="tracking-progression w-full p-4 flex flex-col items-center">
        <h6 className="font-semibold mb-4">Shipping Status</h6>
        {!trackingNo ? (
          'Shipping status will be available when products are shipped.'
        ) : !loading ? (
          <div className="w-full p-3">
            {trackingStatus &&
              trackingStatus[trackingNo] &&
              trackingStatus[trackingNo]
                .reverse()
                .map((item, index) => <TrackingItem key={index} item={item} />)}
          </div>
        ) : (
          <LoadingScreen />
        )}
      </div>
    </>
  );
};

export default TrackingContainer;
