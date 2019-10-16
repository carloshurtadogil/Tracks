import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

const TrackCard = (props) => {
    const { containerStyle } = styles;
    const { name } = props;

    return (
        <Card containerStyle={ containerStyle }>
            <ListItem chevron title={name}/>
        </Card>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        padding: 5,
        borderRadius: 10
    }
});

export { TrackCard };