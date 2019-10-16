import React, { useContext } from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import { TrackCard } from '../components';

const TrackListScreen = ({ navigation }) => {
    const { 
        state,
        fetchTracks 
    } = useContext(TrackContext);
    
    return (
        <>
            <NavigationEvents onWillFocus={ fetchTracks } />
            <FlatList 
                data={state}
                keyExtractor={ item => item._id }
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('TrackDetail', { _id: item._id });
                            }}
                        >
                            <TrackCard name={ item.name } />
                        </TouchableOpacity>
                    );
                }}
            />
        </>
    );
};

TrackListScreen.navigationOptions = () => {
    return {
        title: 'Tracks',
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


const styles = StyleSheet.create({});

export { TrackListScreen };