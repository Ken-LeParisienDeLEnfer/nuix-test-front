import { Spin } from 'antd';
import { useImageGetByIdQuery } from 'services/imageApi';

const TabImage = ({ itemGuid, itemName }: { itemGuid: string; itemName: string }) => {
    const { data: image, isLoading, isFetching , isError } = useImageGetByIdQuery(itemGuid, {
        skip: !itemGuid,
    });

  return (
    <section style={{ textAlign: 'center', marginTop: '20px' }}>
      {(isLoading || isFetching) && <Spin size="large" />}
      {isError && <span style={{ color: 'red' }}>An error occurred loading the image</span>}
      {image && !isFetching && <img src={image} alt={`Image from ${itemName}`} style={{ maxWidth: '100%' }} />}
    </section>
  );
};

export default TabImage;
