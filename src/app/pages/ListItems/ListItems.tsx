import { useItemGetAllQuery } from "services/itemsApi";
import { useImageGetByIdQuery } from "services/imageApi";

export function ListItems() {
    const { data: items, isFetching } = useItemGetAllQuery();
    const { data: image} = useImageGetByIdQuery('guid1');

    return (
        <>
            {isFetching && <span>Loading</span>}
            {items && <span>{items[0]?.guid}</span>}
            {image && <img src={image} alt="image guid1" />}
        </>
    )
  

}