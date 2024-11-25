
const PropertyDisplay = ({legend, value} : {legend: string, value: string}) => {
    return (
        <fieldset>
            <legend>{legend}</legend>
            <span>{value}</span>
        </fieldset>
    )
}

export default PropertyDisplay;