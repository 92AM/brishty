import React from 'react';
import { useMap } from 'react-leaflet';
import L, { ControlOptions, LatLngExpression, Map as LeafletMap } from 'leaflet';

interface MapPositionResetProps {
    resetZoomLevel: number;
    resetMapPosition: LatLngExpression;
}

interface MapControlsExecutorProps {
    controlName: string;
    controlClassName: string;
    map?: LeafletMap;
    renderPosition: ControlOptions;
    executeMapExpandAction?: () => void;
    mapPositionReset?: MapPositionResetProps;
}

class MapControlsExecutor extends React.Component<MapControlsExecutorProps> {
    mapControlsDiv: any;

    createButtonControl() {
        const { controlClassName, controlName, executeMapExpandAction, mapPositionReset } = this.props;
        const MapControl = L.Control.extend({
            onAdd: (map: LeafletMap) => {
                this.mapControlsDiv = L.DomUtil.create('button', controlClassName);
                this.mapControlsDiv.innerHTML = controlName;
                this.mapControlsDiv.style = 'cursor:pointer;';

                this.mapControlsDiv.addEventListener('click', () => {
                    executeMapExpandAction && executeMapExpandAction();
                    mapPositionReset && map.flyTo(mapPositionReset.resetMapPosition, mapPositionReset.resetZoomLevel);
                });

                return this.mapControlsDiv;
            },
        });
        return new MapControl(this.props.renderPosition);
    }

    componentDidMount() {
        const { map } = this.props;
        map && this.createButtonControl().addTo(map);
    }

    componentWillUnmount() {
        this.mapControlsDiv.remove();
    }

    render() {
        return null;
    }
}

const withMap = (Component: any) => (props: MapControlsExecutorProps) => {
    const map = useMap();
    return <Component {...props} map={map} />;
};

export default withMap(MapControlsExecutor);
