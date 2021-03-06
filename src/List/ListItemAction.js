import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    info: PropTypes.string
};

const ListItemAction = props => {
    const { children, className, info, ...otherProps } = props;

    const classes = classNames('mdl-list__item-secondary-content', className);

    return (
        <span className={classes} {...otherProps}>
            {info && <span className="mdl-list__item-secondary-info">{info}</span>}
            <span className="mdl-list__item-secondary-action">
                {children}
            </span>
        </span>
    );
};

ListItemAction.propTypes = propTypes;

export default ListItemAction;
