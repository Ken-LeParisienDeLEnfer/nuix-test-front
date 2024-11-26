import { StyledDateNumberValue } from "app/components/styled/StyledDateNumberValue";
import { StyledFieldset } from "app/components/styled/StyledFieldset";
import { StyledLegend } from "app/components/styled/StyledLegend";
import { StyledStringValue } from "app/components/styled/StyledStringValue";

const PropertyDisplay = ({legend, value} : {legend: string, value: string}) => {

    const isDateOrNumber = (v: string) => {
        return !isNaN(Number(v)) || !isNaN(Date.parse(v));
    };
    
    return (
        <StyledFieldset>
            <StyledLegend>{legend}</StyledLegend>
            {isDateOrNumber(value) ? <StyledDateNumberValue>{value}</StyledDateNumberValue> : <StyledStringValue>{value}</StyledStringValue>}
        </StyledFieldset>
    )
}

export default PropertyDisplay;