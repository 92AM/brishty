import React from 'react';
import { useMap } from 'react-leaflet';
import L, { ControlOptions, Map as LeafletMap } from 'leaflet';
import { getWindow } from '../services/BrowserService';

interface MapExpandProps {
    controllerName: string;
    controllerClassName: string;
    map?: LeafletMap;
    renderPosition: ControlOptions;
}

const executeNavigateToBasicExpandedMap: () => void = () => {
    const windowLocation = getWindow().location;
    windowLocation.assign('/map/');
};

class BasicMapExpandController extends React.Component<MapExpandProps> {
    mapExpandControllerDiv: any;

    createButtonControl() {
        const MapControl = L.Control.extend({
            onAdd: () => {
                this.mapExpandControllerDiv = L.DomUtil.create('button', this.props.controllerClassName);
                this.mapExpandControllerDiv.innerHTML = this.props.controllerName;
                this.mapExpandControllerDiv.style = 'cursor:pointer;';

                this.mapExpandControllerDiv.addEventListener('click', () => {
                    executeNavigateToBasicExpandedMap();
                });

                return this.mapExpandControllerDiv;
            },
        });
        return new MapControl(this.props.renderPosition);
    }

    componentDidMount() {
        const { map } = this.props;
        map && this.createButtonControl().addTo(map);
    }

    componentWillUnmount() {
        this.mapExpandControllerDiv.remove();
    }

    render() {
        return null;
    }
}

const withMap = (Component: any) => (props: MapExpandProps) => {
    const map = useMap();
    return <Component {...props} map={map} />;
};

export default withMap(BasicMapExpandController);
