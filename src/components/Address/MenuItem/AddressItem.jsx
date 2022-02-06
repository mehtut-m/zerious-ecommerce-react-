import AddressItemInfo from './AddressItemInfo';

const AddressItem = () => {
  return (
    <div className="border-b py-4">
      <AddressItemInfo label={'ชื่อ นามสกุล'} content={'เมธัส เมนอน'} />
      <AddressItemInfo label={'โทรศัพท์'} content={'(+66) 814304912'} />
      <AddressItemInfo
        label={'ที่อยู่'}
        content={
          'หอพักซิตี้ปาร์ค ห้อง 1051 เลขที่64 หมู่ 8 ถนนเชียงราก ตำบลคลองหนึ่ง อำเภอคลองหลวง จังหวัดปทุมธานี 12120'
        }
      />
    </div>
  );
};

export default AddressItem;
