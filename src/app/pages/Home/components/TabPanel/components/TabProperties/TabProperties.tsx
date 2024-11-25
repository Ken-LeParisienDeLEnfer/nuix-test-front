import PropertyDisplay from "./components/PropertyDisplay/PropertyDisplay";

const TabProperties = ({properties} : {properties: Record<string, string>}) => {
    return (
        <section>
            {Object.keys(properties).map((key: string) => <PropertyDisplay key={key} legend={key} value={properties[key]}/>)}
        </section>
    )
}

export default TabProperties;