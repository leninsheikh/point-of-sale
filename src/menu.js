import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources } from 'admin-on-rest';

const Menu = ({ resources, onMenuTap }) => (
    <div>
        <MenuItemLink to="/" primaryText="Dashboard" onClick={onMenuTap} />
        <MenuItemLink to="/pos" primaryText="Point of Sale" onClick={onMenuTap} />
    </div>
);

const mapStateToProps = state => ({
    resources: getResources(state),
})
export default connect(mapStateToProps)(Menu);