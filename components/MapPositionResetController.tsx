import React from 'react';
import { useMap } from 'react-leaflet';
import L, { ControlOptions, LatLngExpression, Map as LeafletMap } from 'leaflet';

interface PositionResetProps {
    controllerName: string;
    resetZoomLevel: number;
    resetMapPosition: LatLngExpression;
    controllerClassName: string;
    map?: LeafletMap;
    renderPosition: ControlOptions;
}

class MapPositionResetController extends React.Component<PositionResetProps> {
    mapPositionResetControllerDiv: any;

    createButtonControl() {
        const MapControl = L.Control.extend({
            onAdd: (map: LeafletMap) => {
                this.mapPositionResetControllerDiv = L.DomUtil.create('button', this.props.controllerClassName);
                this.mapPositionResetControllerDiv.innerHTML = this.props.controllerName;
                this.mapPositionResetControllerDiv.style = 'cursor:pointer;';

                this.mapPositionResetControllerDiv.addEventListener('click', () => {
                    map.flyTo(this.props.resetMapPosition, this.props.resetZoomLevel);
                });

                return this.mapPositionResetControllerDiv;
            },
        });
        return new MapControl(this.props.renderPosition);
    }

    componentDidMount() {
        const { map } = this.props;
        map && this.createButtonControl().addTo(map);
    }

    componentWillUnmount() {
        this.mapPositionResetControllerDiv.remove();
    }

    render() {
        return null;
    }
}

function withMap(Component: any) {
    return function WrappedComponent(props: PositionResetProps) {
        const map = useMap();
        return <Component {...props} map={map} />;
    };
}

export default withMap(MapPositionResetController);
