import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import DollarIcon from 'material-ui/svg-icons/editor/attach-money';
import ShoppingCartIcon from 'material-ui/svg-icons/action/shopping-cart';

const styles = {
    dollerCard: { borderLeft: 'solid 4px #31708f', flex: '1', marginRight: '1em' },
    orderCard: { borderLeft: 'solid 4px #ff9800', flex: '1', marginRight: '1em' },
    dollerIcon: { float: 'right', width: 64, height: 64, padding: 16, color: '#31708f' },
    orderIcon: { float: 'right', width: 64, height: 64, padding: 16, color: '#ff9800' },
};

export default (props) => {
    let card = null;
    switch (props.icon) {
        case 'doller':
        card = (
                <Card style={styles.dollerCard}>
                    <DollarIcon style={styles.dollerIcon} />
                    <CardTitle title={props.value} subtitle={props.title} />
                </Card>
            );
            break;
        case 'order':
        card = (
                <Card style={styles.orderCard}>
                    <ShoppingCartIcon style={styles.orderIcon} />
                    <CardTitle title={props.value} subtitle={props.title} />
                </Card>
            )
            break;
        default: card = null
    }

    return card
}

