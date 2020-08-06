import * as React from 'react'

class Photo extends React.Component {
    handleClick = () => {
        this.props.onClick(this.props.photo.albumId)
    }

    render = () => (
        <img
            src={this.props.photo.thumbnailUrl}
            width="150"
            height="150"
            onClick={this.handleClick}
        />
    )
}

export default Photo