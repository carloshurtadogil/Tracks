import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';
import { Spacer } from '../components';
import { SafeAreaView } from 'react-navigation';

const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];
const TrackDetailScreen = ({ navigation }) => {
    const _id = navigation.getParam('_id');
    const { state } = useContext(TrackContext);

    const track = state.find(t => t._id === _id);
    var date = new Date(track.date);
    var formatted = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    console.log(formatted);

    const initialCoords = track.locations[0].coords;

    const { buttonStyle, map, textStyle, titleStyle } = styles;

    return (
        <>
            <Spacer>
                <Text style={ titleStyle }>{ track.name }</Text>
            </Spacer>

            <MapView
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
                style={ map }
            >
                <Polyline 
                    coordinates={
                        track.locations.map(loc => loc.coords)
                    } 
                />
            </MapView>

            <Spacer>
                <Text style={ textStyle }>Recorded: { formatted }</Text>
            </Spacer>

            <Spacer>
                <Button 
                    title="Rename"
                    style={ buttonStyle }
                />
            </Spacer>

            <Spacer>
                <Button 
                    title="Delete"
                    style={ buttonStyle }
                />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#ff0000'
    },
    map: {
        height: 300
    },
    textStyle: {
        color: '#808080',
        fontSize: 15,
        marginLeft: 5,
        marginTop: 5
    },
    titleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 30
    }
});

TrackDetailScreen.navigationOptions = ({navigation}) => {
    return {
        title: 'Track Details',
        headerStyle: {
            backgroundColor: '#485461',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18
        },
    };
};

export { TrackDetailScreen };